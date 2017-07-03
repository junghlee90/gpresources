var React = require('react');
import GoogleLogin from 'react-google-login'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

//based on https://reacttraining.com/react-router/web/example/auth-workflow

class AuthExample extends React.Component {
  constructor(props){
    super(props)
    this.state = {name:''}
  }
  updateName = (name) => { this.setState({name:name}); }
  render() {
    return (
      <Router>
        <div>
          <AuthButton name={this.state.name}/>
          <Route path="/login"
          render={(props) => <Login {...props} updateName={this.updateName}/>}/>
          <PrivateRoute path="/" component={Protected}/>
        </div>
      </Router>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

//const AuthButton = withRouter(({ history }) => (
const AuthButton = (props) => {
  return(
    <div>
    {fakeAuth.isAuthenticated ? (
      <h3>
        Welcome, {props.name}!
      </h3>
    ) : (
      <h3>You are not logged in.</h3>
    )}
    </div>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Protected = () => <p>Show what I have checked out</p>

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = { redirectToReferrer: false }
  }

  responseGoogle = (response) => {
    var profile = response.getBasicProfile();
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
    this.props.updateName(profile.getName())

    //DEBUG
    console.log(response);
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var CLIENT_ID = response.getAuthResponse().id_token;
    console.log('Validating ID token: ' + CLIENT_ID);

    //Google recommends not to pass the ID from the frontend to the backend
    //but to do something like this instead:
    //method 1: tokeninfo endpoint
    //ok for low traffic
    //TODO: consider switching to method 2 later
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token='+CLIENT_ID);
    xhr.onload = function() {
      var res = xhr.response;
      console.log('response: ' + xhr.response);
    };
    xhr.send(null);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <GoogleLogin
          clientId="635318879150-3u23dekvrtepl6o74p5ru5qrbmhlgh47.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    )
  }
}

module.exports = AuthExample;

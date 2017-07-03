var React = require('react');
import GoogleLogin from 'react-google-login'
//var GoogleAuth = require('google-auth-library');

const responseGoogle = (response) => {
  console.log(response);
  var profile = response.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var CLIENT_ID = response.getAuthResponse().id_token;
  console.log('Validating ID token: ' + CLIENT_ID);

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

  //method 2: using Google API Client Lib (recommended)
  // build error -> TODO: debug
  /*
  var auth = new GoogleAuth;
  var client = new auth.OAuth2(CLIENT_ID, '', '');
  var res = client.verifyIdToken(
    token,
    CLIENT_ID,
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
    function(e, login) {
      var payload = login.getPayload();
      var userid = payload['sub'];
      // If request specified a G Suite domain:
      //var domain = payload['hd'];
    });
  console.log(res);
  */
}

class GoogleLoginWrapper extends React.Component {
  render(){
    return (
      <GoogleLogin
        clientId="635318879150-3u23dekvrtepl6o74p5ru5qrbmhlgh47.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
	)
  }
}

module.exports = GoogleLoginWrapper;


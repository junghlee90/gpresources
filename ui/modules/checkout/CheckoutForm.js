import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

class CheckoutForm extends Component {
  render () {
    return (
      <div>
        <TextField
          floatingLabelText='Your Name'
          hintText='Your Name' />
        <br />
        <br />
        <p className='h3'> What are you checking out? </p>
        <br />
        <br />
        <RaisedButton
          label='Check out'
          primary />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { items } = state.resources
  return {
    items
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)

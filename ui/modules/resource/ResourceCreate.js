import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResources } from './ResourceActions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class ResourceCreate extends Component {
  render () {
    const style = {
      margin: 12
    }

    return (
      <div>
        <TextField
          floatingLabelText='Item Name'
          hintText='Item Name' />
        <br />
        <TextField
          floatingLabelText='Count'
          hintText='Count' />
        <br />
        <RaisedButton
          label='Submit'
          primary
          style={style} />
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
  return {
    getResources: bindActionCreators(getResources, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCreate)

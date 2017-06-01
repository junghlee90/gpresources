import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getResources,
  addResource,
  resourceNameChanged,
  resourceCountChanged,
  addResourceNew
} from './ResourceActions'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class ResourceCreate extends Component {
  componentWillMount () {
    this.props.addResourceNew()
  }

  render () {
    const {
      currentResourceName,
      currentResourceCount,
      addResource,
      addResourceNew,
      resourceNameChanged,
      resourceCountChanged } = this.props

    const style = {
      margin: 12
    }

    return (
      <div>
        <TextField
          floatingLabelText='Item Name'
          onChange={(e) => resourceNameChanged(e.target.value)}
          value={currentResourceName}
          hintText='Item Name' />
        <br />
        <TextField
          floatingLabelText='Count'
          onChange={(e) => resourceCountChanged(e.target.value)}
          value={currentResourceCount}
          hintText='Count' />
        <br />
        <RaisedButton
          label='Add'
          onTouchTap={(e) => addResource()}
          primary
          style={style} />
        <RaisedButton
          label='Clear Form'
          onTouchTap={(e) => addResourceNew()}
          primary
          style={style} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { currentResourceCount, currentResourceName } = state.resources
  return {
    currentResourceName, currentResourceCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: bindActionCreators(getResources, dispatch),
    resourceNameChanged: bindActionCreators(resourceNameChanged, dispatch),
    resourceCountChanged: bindActionCreators(resourceCountChanged, dispatch),
    addResource: bindActionCreators(addResource, dispatch),
    addResourceNew: bindActionCreators(addResourceNew, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourceCreate)

import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResources } from './ResourceActions'
import CheckoutForm from '../checkout/CheckoutForm'
import Dialog from 'material-ui/Dialog'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class ResourcesList extends Component {
  componentDidMount () {
    this.props.getResources()
  }

  renderHeaders () {
    const headers = [
      'Name', 'Available Count', 'Checkout Count'
    ]

    return (
      <TableHeader>
        <TableRow>
          {
            headers.map((header) => {
              return (
                <TableHeaderColumn key={header}>
                  {header}</TableHeaderColumn>
              )
            })
          }
        </TableRow>
      </TableHeader>
    )
  }

  renderRows () {
    const { items } = this.props

    return (
      <TableBody>
        {
          items.map((item) => {
            return item.resource_states.map((state) => {
              return (
                <TableRow key={state.id}> >
                  <TableRowColumn>{item.name}</TableRowColumn>
                  <TableRowColumn>{state.count}</TableRowColumn>
                  <TableRowColumn>
                    <TextField
                       />
                  </TableRowColumn>
                </TableRow>
              )
            })
          })
        }
      </TableBody>
    )
  }

  render () {
    return (
      <div>
        <TextField
          errorText='This field is required'
          hintText='Name of person checking out the resources (i.e. John Lin)' />
        <Table
          multiSelectable
          >
          {this.renderHeaders()}
          {this.renderRows()}
        </Table>
        <RaisedButton
          label='Check out'
          primary />
        <Dialog
          modal={false}
          open={false}
          >
          <CheckoutForm />
        </Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesList)

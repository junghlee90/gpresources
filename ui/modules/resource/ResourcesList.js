import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getResources,
  updateCheckoutItem,
  toggleCheckoutForm
 } from './ResourceActions'
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
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
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
    const { items, checkoutRequest, updateCheckoutItem } = this.props

    return (
      <TableBody
        displayRowCheckbox={false}
        >
        {
          items.map((item) => {
            return item.resource_states.map((state) => {
              return (
                <TableRow key={state.id}> >
                  <TableRowColumn>{item.name}</TableRowColumn>
                  <TableRowColumn>{state.count}</TableRowColumn>
                  <TableRowColumn>
                    <TextField
                      id={item.id.toString()}
                      onChange={(e) => updateCheckoutItem({
                        id: item.id,
                        count: e.target.value
                      })}
                      value={checkoutRequest[item.id] === undefined ? '' : checkoutRequest[item.id]}
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
    const { checkoutFormOpen, toggleCheckoutForm } = this.props

    return (
      <div>
        <TextField
          errorText='This field is required'
          hintText='Name of person checking out the resources (i.e. John Lin)' />
        <Table
          selectable={false}
          >
          {this.renderHeaders()}
          {this.renderRows()}
        </Table>
        <RaisedButton
          label='Check out'
          onTouchTap={(e) => toggleCheckoutForm()}
          primary />
        <Dialog
          modal={false}
          onRequestClose={(e) => toggleCheckoutForm()}
          open={checkoutFormOpen}
          >
          <CheckoutForm />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { items, checkoutRequest, checkoutFormOpen } = state.resources
  return {
    items, checkoutRequest, checkoutFormOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: bindActionCreators(getResources, dispatch),
    updateCheckoutItem: bindActionCreators(updateCheckoutItem, dispatch),
    toggleCheckoutForm: bindActionCreators(toggleCheckoutForm, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesList)

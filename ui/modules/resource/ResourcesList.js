import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getResources } from './ResourceActions'
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
      'Name', 'Count'
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
        <Table>
          {this.renderHeaders()}
          {this.renderRows()}
        </Table>
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
  return {
    getResources: bindActionCreators(getResources, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesList)

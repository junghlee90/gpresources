import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class ResourcesList extends Component {
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
    const stuff = [{name: 'stuff', count: 1}]

    return (
      <TableBody>
        {
          stuff.map((stuf) => {
            return (
              <TableRow key={stuf.name}> >
                <TableRowColumn>{stuf.name}</TableRowColumn>
                <TableRowColumn>{stuf.count}</TableRowColumn>
              </TableRow>
            )
          })
        }
      </TableBody>
    )
  }

  render () {
    return (
      <Table>
        {this.renderHeaders()}
        {this.renderRows()}
      </Table>
    )
  }
}

export default ResourcesList

import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'

class MainLayout extends Component {
  render () {
    const style = {
      display: 'inline-block',
      margin: '16px 32px 16px 0'
    }

    return (
      <div className='container'>
        <div className='col-md-2'>
          <Paper style={style}>
            <Menu>
              <MenuItem
                containerElement={<Link to='/' />}
                primaryText='Available' />
              <MenuItem primaryText='Checked Out' />
              <MenuItem
                containerElement={<Link to='/add_new' />}
                primaryText='Add New' />
            </Menu>
          </Paper>
        </div>
        <div className='col-md-9' style={style}>
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default MainLayout

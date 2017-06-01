import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

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
              <MenuItem primaryText='Available' />
              <MenuItem primaryText='Checked Out' />
            </Menu>
          </Paper>
        </div>
        <div className='col-md-10'>
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default MainLayout

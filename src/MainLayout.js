import React, { Component } from 'react'

class MainLayout extends Component {
  render () {
    return (
      <div>
        <div className='container-fluid'>
          <div className='container-fluid'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout

import React from 'react'

const MainLayout = React.createClass({
  render: function () {
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
})

export default MainLayout

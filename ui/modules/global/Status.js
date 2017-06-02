import React, { Component } from 'react'

class Status extends Component {
  shouldComponentUpdate (nextProps) {
    return (nextProps.msg !== this.props.msg) || (nextProps.status !== this.props.status)
  }

  componentDidMount () {
    $('.alert').show()
    window.setTimeout(function () { $('.alert').slideUp() }, 5000)
  }

  render () {
    const { msg } = this.props
    return (
      <div className='alert alert-info'>
        <p>
          {msg}
        </p>
      </div>
    )
  }
}

export default Status

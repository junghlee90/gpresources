import React, { Component } from 'react'
import styles from './style.css'
import { Link } from 'react-router'

class About extends Component {
  render () {
    return (
      <div className={styles.content}>
        <h1 className='page-title'>About Page</h1>
        <Link to='/about' className='btn'>About page &rarr;</Link>
      </div>
    )
  }
}

export default About

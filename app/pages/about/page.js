import React, { Component } from 'react'
import styles from './style.css'
import { Link } from 'react-router'
import { _fetch, apiUrl } from '../../lib/utils'

class About extends Component {
  render () {
    const requestParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    console.log(apiUrl().API_URL)
    let result = _fetch(apiUrl().API_URL, requestParams)
    console.log(result, 'here')

    return (
      <div className={styles.content}>
        <h1 className='page-title'>About Page</h1>
        <Link to='/about' className='btn'>About page &rarr;</Link>
      </div>
    )
  }
}

export default About

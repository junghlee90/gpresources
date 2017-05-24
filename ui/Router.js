import React from 'react'
import { Router, browserHistory, Route } from 'react-router'

import HomePage from './pages/home/page'
import AboutPage from './pages/about/page'
import MainLayout from './MainLayout'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <Route path='/about' component={AboutPage} />
      <Route path='/home' component={HomePage} />
    </Route>
  </Router>
)

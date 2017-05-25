import React from 'react'
import { Router, browserHistory, Route } from 'react-router'

import AboutPage from './pages/about/page'
import MainLayout from './MainLayout'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={AboutPage} />
    </Route>
  </Router>
)

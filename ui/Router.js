import React from 'react'
import { Router, browserHistory, Route } from 'react-router'

import ResourcesList from './modules/resource/ResourcesList'
import MainLayout from './MainLayout'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={ResourcesList} />
    </Route>
  </Router>
)

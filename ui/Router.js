import React from 'react'
import { Router, browserHistory, Route } from 'react-router'

import GoogleLoginWrapper from './login.js'
import ResourcesList from './modules/resource/ResourcesList'
import ResourceCreate from './modules/resource/ResourceCreate'
import MainLayout from './MainLayout'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={GoogleLoginWrapper} />
      <Route path='/home' component={ResourcesList} />
      <Route path='/add_new' component={ResourceCreate} />
    </Route>
  </Router>
)

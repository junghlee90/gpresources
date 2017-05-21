import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import App from './App'
import HomePage from './pages/home/page'
import AboutPage from './pages/about/page'
import MainLayout from './MainLayout'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={MainLayout}>
      <Route path='/about' component={AboutPage} />
    </Route>
  </Router>
)

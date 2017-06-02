import 'babel-polyfill'

import React from 'react'
import Router from './Router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './Store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'jquery/src/jquery'

import './shared/base.css'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      {Router}
    </Provider>
  </MuiThemeProvider>
)

render(
  <App />,
  document.getElementById('app')
)

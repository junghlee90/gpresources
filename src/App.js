import 'babel-polyfill'

import React from 'react'
import Router from './Router'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import './shared/base.css'

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    {Router}
  </MuiThemeProvider>
)

render(
  <App />,
  document.getElementById('app')
)

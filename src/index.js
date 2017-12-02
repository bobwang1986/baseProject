import React from 'react'
import { render } from 'react-dom'
import Routers from './router/router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import DevTools from './config/DevTools'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './themes/common.css'
const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Routers />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)

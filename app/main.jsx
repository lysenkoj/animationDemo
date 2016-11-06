'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Demo from './components/Demo'


render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Demo}/>
    </Router>
  </Provider>,
  document.getElementById('main')
)
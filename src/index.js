import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'


import App from './App'
import './index.css'

import 'rxjs'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import createSagaMiddleware from 'redux-saga'
//import {rootSaga} from './sagas'
import createEpicMiddleware from 'redux-observable'
import {rootEpic} from './epics'
import {changeme} from './reducers'

//const sagaMiddleware = createSagaMiddleware() 
const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore(changeme, compose(
    //applyMiddleware(sagaMiddleware),
    applyMiddleware(epicMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f=> f
    )
  )
if (window.devToolsExtension) {
  window.devToolsExtension.updateStore(store)
}  

//sagaMiddleware.run( rootSaga )

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

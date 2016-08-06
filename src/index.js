import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'


import App from './App';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas'
import {changeme} from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(changeme, compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f=> f
    )
  );

sagaMiddleware.run( rootSaga )

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

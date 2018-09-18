import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/App';
import rootReducer from './rootReducer';

var store;
// const middlewares = [
//   thunk,middleware
// ];

// const enhancers = [
//   applyMiddleware(...middlewares),
// ];
store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'));

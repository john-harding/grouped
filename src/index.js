import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import Reducers from './redux/modules/reducers.js';
import './index.css';

let store = createStore(Reducers);
const user = {
    user: {
      loggedIn: true,
      username:"john",
      url:"/john"
    },
    content: {
      editing: false
    }
};
ReactDOM.render(
  <Provider store={store}>
    <App data={user} />
  </Provider>,
  document.getElementById('root')
);

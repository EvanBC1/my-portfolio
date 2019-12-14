import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import App from './App';
import Counter from "./components/counter";
import allReducers from "./reducers/combiner";
import './style/main.css'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
   <App />
   <Counter/>
  </Provider>,
  document.getElementById('root'));

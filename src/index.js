import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import App from './App';
import Counter from "./components/counter";
import Projects from "./components/projects";
import Intro from "./components/intro";
import allReducers from "./reducers/combiner";
import './style/main.css'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
   <Intro />
   {/* <App />*/}
   {/*<Counter/>*/}
   <Projects />
  </Provider>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import allReducers from "./reducers/combiner";
import App from './App';
import Counter from "./components/counter";
import Intro from "./components/intro";
import About from "./components/about";
import NavBar from './components/navBar';
import Project from "./components/project";
import Contact from './components/contact'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Intro />
    <NavBar/>
    <About />
    <Project />
    <Contact/>
  </Provider>,
  document.getElementById('root'));

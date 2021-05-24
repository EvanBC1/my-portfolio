import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import allReducers from "./reducers/combiner";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Portfolio from './components/portfolio/index';
import Cards from './components/cards'
import './style/main.css'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
<BrowserRouter>
  <Switch>

  <Provider store={store}>
    <Route exact path="/" component={Portfolio} />
    <Route exact path="/Cards" component={Cards} />
  </Provider>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

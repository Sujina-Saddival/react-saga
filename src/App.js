import React, { Component } from 'react';
import { Provider } from 'reach-redux';
import store from './store';
import Home from './Home';

export default () => {
  <Provider store={store}>
  <div>Im here</div>
  <Home/>
  </Provider>
}
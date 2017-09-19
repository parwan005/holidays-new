/*var React = require('react');
var Route = require('react-router');
var PackageListing = require('./components/PackageListing');*/
import React from 'react';
import {Route} from 'react-router';
import PackageListing from './components/PackageListing';

export default (
  <Route path='/holidays-india/goa-travel-packages.html' component={PackageListing}>
  </Route>
);

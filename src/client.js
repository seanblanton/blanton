import React from 'react';
import ReactDOM from 'react-dom';
import cxs from 'cxs/monolithic';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { colors } from './config';
import { routes } from './routes';
import Prism from './prism';

cxs('*', { boxSizing: 'border-box' })

cxs('body', {
  margin: 0,
  padding: 0,
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  lineHeight: 1.5,
  color: colors.gray1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignContent: 'stretch'
})


ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    {routes}
  </Router>
, document.getElementById('app'));


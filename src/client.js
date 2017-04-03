import React from 'react';
import ReactDOM from 'react-dom';
import cxs from 'cxs/monolithic';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { colors } from './config';
import { routes } from './routes';
import Prism from './prism';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-29141738-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  console.log("pushed " + window.location.pathname + " update to GA");
}

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
  <Router onUpdate={() => { window.scrollTo(0, 0); logPageView(); } } history={browserHistory} key={Math.random()}>
    {routes}
  </Router>
, document.getElementById('app'));


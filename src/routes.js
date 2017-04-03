import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import NotFound from './components/NotFound';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path=":year/:month/:day/:title" component={Post} />
    <Route path="*" component={NotFound} />
  </Route>
);


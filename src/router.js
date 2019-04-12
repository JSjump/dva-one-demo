import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Counters from './routes/Counters';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counters" exact component={Counters} /> 
      </Switch>
    </Router>
  );
}

export default RouterConfig;

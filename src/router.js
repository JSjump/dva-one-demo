import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Counters from './routes/Counters';
import UserPage from './routes/UserPage'
function RouterConfig({ history,app }) {
  console.log(app)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/counters" exact component={Counters} /> 
        <Route path="/user" exact component={UserPage} /> 
      </Switch>
    </Router>
  );
}

export default RouterConfig;

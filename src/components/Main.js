import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Jobs from './Jobs';
import AddJob from './AddJob';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Jobs } />
      <Route exact path='/addjob' component={ AddJob } />
    </Switch>
  </main>
)

export default Main;

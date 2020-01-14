import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vehicle from '../vehicle/Vehicle';

const DashboardRouter = () => {
  const abc = () => <h1>404</h1>
  return(<Switch>
    <Route path='/dashboard/vehicle' component={Vehicle} />
    <Route exact path='' render={abc} />
  </Switch>
);
}

export default DashboardRouter;

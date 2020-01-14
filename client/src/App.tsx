import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};



export default App;

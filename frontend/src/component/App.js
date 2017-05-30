import React from 'react';
import Index from './Index';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Event from './Events/Item';
import Team from './Team';
import Evenement from './Evenement';
import { isAuthenticated } from '../utils';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />)}
  />
);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/evenement" component={Evenement} />
      <Route path="/profile" component={Profile} />
      <Route path="/event/:id" component={Event} />
      <Route path="/team/:id" component={Team} />
    </div>
  </Router>
);

export default App;

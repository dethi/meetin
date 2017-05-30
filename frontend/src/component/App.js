import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

import Loading from './Loading';
import Index from './Index';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Event from './Events/Item';
import Team from './Team';
import Evenement from './Evenement';

import { isAuthenticated } from '../utils';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated()
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />
);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isLogged: true,
          isLoading: false
        });
      } else {
        this.setState({
          isLogged: false,
          isLoading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { isLoading } = this.state;

    return isLoading
      ? <Loading />
      : <Router>
          <div>
            <Route exact path="/" component={Index} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/evenement" component={Evenement} />
            <PrivateRoute path="/event/:id" component={Event} />
            <PrivateRoute path="/team/:id" component={Team} />
          </div>
        </Router>;
  }
}

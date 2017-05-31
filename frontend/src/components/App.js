import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Loading from './Loading';
import Login from './Login';
import Profile from './Profile';
import Event from './Events/Item';
import History from './History';
import Evenement from './Evenement';
import Discover from './Discover';

import './App.css';

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogged
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />
);

const App = ({ isLoading, isLogged }) =>
  isLoading
    ? <Loading />
    : <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/discover"
            component={Discover}
            isLogged={isLogged}
          />
          <PrivateRoute
            path="/profile"
            component={Profile}
            isLogged={isLogged}
          />
          <PrivateRoute
            path="/evenement"
            component={Evenement}
            isLogged={isLogged}
          />
          <PrivateRoute
            path="/event/:id"
            component={Event}
            isLogged={isLogged}
          />
          <PrivateRoute
            path="/history"
            component={History}
            isLogged={isLogged}
          />
        </div>
      </Router>;

const mapStateToProps = state => {
  return {
    isLoading: !state.ready,
    isLogged: state.user !== null
  };
};

export default connect(mapStateToProps)(App);

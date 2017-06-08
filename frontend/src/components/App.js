import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Loading from './Loading';
import Login from './Login';
import Profile from './Profile';
import Event from './Events/Item';
import EventList from './Events/List';
import History from './History';
import Evenement from './Evenement';
import Discover from './Discover';

import './App.css';

const PrivateRoute = ({ component: Component, isLogged, ...rest }) =>
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
  />;

const App = ({ isLoading, isLogged }) =>
  isLoading
    ? <Loading />
    : <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/discover"
            component={Discover}
            isLogged={isLogged}
          />
          <PrivateRoute
            exact
            path="/profile"
            component={Profile}
            isLogged={isLogged}
          />
          <PrivateRoute
            exact
            path="/event/new"
            component={Evenement}
            isLogged={isLogged}
          />
          <PrivateRoute
            exact
            path="/event/:id"
            component={Event}
            isLogged={isLogged}
          />
          <PrivateRoute
            exact
            path="/event"
            component={EventList}
            isLogged={isLogged}
          />
          <PrivateRoute
            exact
            path="/history"
            component={History}
            isLogged={isLogged}
          />

          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>;

const mapStateToProps = state => {
  return {
    isLoading: !state.ready,
    isLogged: state.user !== null
  };
};

export default connect(mapStateToProps)(App);

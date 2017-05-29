import React from 'react'
import Index from './Index'
import Login from './Login'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Event from './Events/Item'
import { isAuthenticated } from '../utils'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/event" component={Event} />
    </div>
  </Router>
)

export default App
import React from 'react'
import Index from './Index/Index'
import Login from './Login/Login'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

export default App

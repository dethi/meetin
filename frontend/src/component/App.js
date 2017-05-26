import React from 'react'
import Index from './Index/Index'
import Login from './Login/Login'
import Forget from './Login/Forget'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route path="/login" component={Login} />
      <Route path="/forget" component={Forget} />
    </div>
  </Router>
)

export default App

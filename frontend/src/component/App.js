import React from 'react'
import Index from './Index/Index'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Index} />
      <Route path="/login" component={Index} />
    </div>
  </Router>
)

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './component/navbar'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navbar />, div)
})

import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import registerServiceWorker from './registerServiceWorker'
import 'bulma/css/bulma.css'
import 'font-awesome/scss/font-awesome.scss'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

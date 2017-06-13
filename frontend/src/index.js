import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import App from './components/App';
import pushNotification from './pushNotification';
import store from './store';
import './firebase';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>;

const rootEl = document.getElementById('root');
ReactDOM.render(<Root />, rootEl);

pushNotification.register();

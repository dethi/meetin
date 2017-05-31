import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './firebase';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootEl = document.getElementById('root');
ReactDOM.render(<Root />, rootEl);
registerServiceWorker();

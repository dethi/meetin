import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import './bootstrap';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootEl = document.getElementById('root');
ReactDOM.render(<Root />, rootEl);
registerServiceWorker();

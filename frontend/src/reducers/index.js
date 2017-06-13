import { combineReducers } from 'redux';

import app from './app';
import user from './user';

const reducers = combineReducers({
  app,
  user
});

export default reducers;

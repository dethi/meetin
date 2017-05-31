import { combineReducers } from 'redux';

import ready from './ready';
import user from './user';

const reducers = combineReducers({
  ready,
  user
});

export default reducers;

// A reducer is a pure function that takes the previous state and an action
// as arguments and returns a new state

import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';

export default combineReducers({
  locDetail: locationReducer
});
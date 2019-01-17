// A reducer is a pure function that takes the previous state and an action
// as arguments and returns a new state

import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { sideMenuReducer } from './sideMenuReducer';

export default combineReducers({
  locDetail: locationReducer,
  sideMenu: sideMenuReducer
});
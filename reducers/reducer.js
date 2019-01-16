// A reducer is a pure function that takes the previous state and an action
// as arguments and returns a new state

import { combineReducers } from 'redux';

const INITIAL_APP_STATE = {
  gps: null,
  location: null
};

const appReducer = (state = INITIAL_APP_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_GPS':
      return Object.assign({}, state, {
        gps: action.payload.gps
      });

    case 'UPDATE_LOCATION':
      return Object.assign({}, state, {
        location: action.payload.location
      });

    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer
});
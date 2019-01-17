const INITIAL_STATE = {
  gps: null,
  location: null
}

export const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_GPS':
      return {
        ...state,
        gps: action.payload.gps
      };

    case 'UPDATE_LOCATION':
      return {
        ...state,
        location: action.payload.location
      };

    default:
      return state;
  }
};
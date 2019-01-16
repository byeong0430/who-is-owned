const INITIAL_STATE = {
  gps: null,
  location: null
}

export const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_GPS':
      return {
        ...INITIAL_STATE,
        gps: action.payload.gps
      };

    case 'UPDATE_LOCATION':
      return {
        ...INITIAL_STATE,
        location: action.payload.location
      };

    default:
      return state;
  }
};
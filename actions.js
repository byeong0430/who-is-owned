export const updateGps = (longitude, latitude) => {
  return {
    type: 'UPDATE_GPS',
    payload: { gps: { longitude, latitude } }
  }
};

export const updateLocation = location => {
  return {
    type: 'UPDATE_LOCATION',
    payload: { location }
  }
};
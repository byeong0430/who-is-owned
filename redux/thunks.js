import { updateGps, updateLocation } from './actions';
import { handleGetLocation } from '../utils/functions/locFunctions';

export const updateGpsAndLocation = (longitude, latitude) => async dispatch => {
  dispatch(updateGps(longitude, latitude));
  const location = await handleGetLocation(longitude, latitude);
  dispatch(updateLocation(location));
};
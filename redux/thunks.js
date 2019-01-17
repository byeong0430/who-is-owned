import { updateGps, updateLocation } from './actions/locActions';
import { updateQuery, updateHits } from './actions/sideMenuActions';
import { handleGetLocation } from '../utils/functions/locFunctions';

import AlgoliaPlace from '../utils/api/AlgoliaPlace';

// algolia places api: https://community.algolia.com/places/api-clients.html
const ap = new AlgoliaPlace();

export const handleUpdateGpsAndLocation = (longitude, latitude) => async dispatch => {
  dispatch(updateGps(longitude, latitude));
  const location = await handleGetLocation(longitude, latitude);
  dispatch(updateLocation(location));
};

export const handleLoadPlaces = (query, gps) => async dispatch => {
  dispatch(updateQuery(query));
  const aroundLatLng = gps ? `${gps.latitude},${gps.longitude}` : undefined;
  const hits = await ap.getPlaces({ query, aroundLatLng });

  dispatch(updateHits(hits));
};
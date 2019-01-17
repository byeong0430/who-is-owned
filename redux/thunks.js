import { updateGps, updateLocation } from './actions/locActions';
import { updateQuery, updateHits } from './actions/sideMenuActions';
import { updateLegislators } from './actions/openSecretActions';
import { handleGetLocation } from '../utils/functions/locFunctions';

import OpenSecret from '../utils/api/OpenSecret';
import AlgoliaPlace from '../utils/api/AlgoliaPlace';

// algolia places api: https://community.algolia.com/places/api-clients.html
const algoliaPlace = new AlgoliaPlace();
const openSecret = new OpenSecret();

export const handleInitialGpsLocUpdate = (longitude, latitude) => async dispatch => {
  dispatch(updateGps(longitude, latitude));
  const location = await handleGetLocation(longitude, latitude);
  dispatch(updateLocation(location));
};

export const handleGpsLocUpdateAndHome = (longitude, latitude, navigation) => async dispatch => {
  dispatch(updateGps(longitude, latitude));
  const location = await handleGetLocation(longitude, latitude);
  dispatch(updateLocation(location));
  navigation.navigate('Home');
};

export const handleLoadPlaces = (query, gps) => async dispatch => {
  dispatch(updateQuery(query));
  const aroundLatLng = gps ? `${gps.latitude},${gps.longitude}` : undefined;
  const hits = await algoliaPlace.getPlaces({ query, aroundLatLng });
  dispatch(updateHits(hits));
};

export const handleGetLegislators = regionCode => async dispatch => {
  const legislatorSummary = await openSecret.getLegislators({
    id: regionCode
  });
  dispatch(updateLegislators(legislatorSummary));
};
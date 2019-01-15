import { Location } from 'expo';
const usStateCode = require('../data/usStateCode.json');

export const handleGetLocation = async (latitude, longitude) => {
  let location = await Location.reverseGeocodeAsync({ longitude, latitude });

  // Select the first array item
  location = location[0];

  if (location.country === 'United States') {
    location.regionCode = getUsRegionCode(location.region, usStateCode);
  }

  return location;
}

getUsRegionCode = (state, stateCodeJson) => stateCodeJson[state];

import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const configParams = params => {
  const defaultParams = {
    timeout: 6000,
    params: {
      apikey: API_KEY,
      output: 'json'
    }
  };

  // Add HTTP verb and delete it from params
  defaultParams.method = params.verb;
  delete params['verb'];

  // Add the rest of the key-value pairs to defaultParams.params
  defaultParams.params = { ...defaultParams.params, ...params }

  return defaultParams;
};

export const fetchData = async paramArgs => {
  const result = await axios.get(
    'http://www.opensecrets.org/api/',
    configParams(paramArgs)
    );

  if (result.status !== 200) {
    throw new Error('Something went wrong..\nPlease try again later.');
  }

  return result.data.response;
};

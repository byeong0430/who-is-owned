import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const baseUrl = 'http://www.opensecrets.org/api/';

export const getLegislators = async paramArgs => {
  const { verb } = paramArgs;
  delete paramArgs['verb'];

  const result = await axios.get(baseUrl, {
    timeout: 6000,
    method: verb,
    params: {
      apikey: API_KEY,
      output: 'json',
      ...paramArgs
    }
  });

  if (result.status !== 200) {
    throw new Error('Something went wrong..\nPlease try again later.');
  }

  return result.data.response;
};

import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const baseUrl = 'http://www.opensecrets.org/api/';

export const getLegislators = async stateCode => {
  const response = await axios.get(baseUrl, {
    timeout: 6000,
    params: {
      method: 'getLegislators',
      id: stateCode,
      apikey: API_KEY
    }
  });

  if (response.status !== 200) {
    throw new Error('Something went wrong..\nPlease try again later.');
  }

  return response.data;
};

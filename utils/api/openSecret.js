import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

// Reference: https://www.opensecrets.org/open-data/api-documentation

export default class OpenSecret {
  constructor() {
    this.url = 'http://www.opensecrets.org/api/';
    this.defaultParams = {
      timeout: 6000,
      params: {
        apikey: API_KEY,
        output: 'json'
      }
    };
  }

  // Add additional parameters to default parameter object
  addParams = paramObj => {
    const newParams = { ...this.defaultParams };
    newParams.params = {
      ...newParams.params,
      ...paramObj,
      method: 'getLegislators'
    };

    return newParams;
  }

  getLegislators = async params => {
    const result = await axios.get(this.url, this.addParams(params));

    if (result.status !== 200) {
      throw new Error('Something went wrong..\nPlease try again later.');
    }

    return result.data.response.legislator;
  }
}
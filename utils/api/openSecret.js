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
  addParams = (method, paramObj) => {
    const newParams = { ...this.defaultParams };
    newParams.params = {
      ...newParams.params,
      ...paramObj,
      method
    };

    return newParams;
  }

  getLegislators = async params => {
    const parameters = this.addParams('getLegislators', params);
    const result = await axios.get(this.url, parameters);

    if (result.status !== 200) {
      throw new Error('Something went wrong..\nPlease try again later.');
    }

    return result.data.response.legislator;
  }

  getCandSummary = async params => {
    const parameters = this.addParams('candSummary', params);
    const result = await axios.get(this.url, parameters);

    if (result.status !== 200) {
      throw new Error('Something went wrong..\nPlease try again later.');
    }

    return result.data.response.summary['@attributes'];
  }
}
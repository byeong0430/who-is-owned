import axios from 'axios';

const baseUrl = 'http://www.opensecrets.org/api/';
const apiKey = 'cf7a38e0bc76b9261aa78102ce8de402';
export const getLegislators = async stateCode => {
  const url = `${baseUrl}/?method=getLegislators&id=${stateCode}&apikey=${apiKey}`;

  const response = await axios.get(baseUrl, {
    timeout: 6000,
    params: {
      method: 'getLegislators',
      id: stateCode,
      apikey: apiKey
    }
  });

  if (response.status !== 200){
    throw new Error('Something went wrong..\nPlease try again later.');
  }

  return response.data;
};
import axios from 'axios';

export default class AlgoliaPlace {
  constructor() {
    this.urls = [
      'https://places-dsn.algolia.net/1/places/query'
    ];
    this.defaultParams = {
      language: 'en',
      hitsPerPage: 10
    };
  }

  addParams = paramOjb => (
    { ...this.defaultParams, ...paramOjb }
  )

  getPlaces = async params => {
    let result = await axios.post(this.urls[0], this.addParams(params));
    return result.data.hits;
  }
}
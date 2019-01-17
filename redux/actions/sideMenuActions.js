export const updateQuery = query => {
  return {
    type: 'UPDATE_QUERY',
    payload: { query }
  }
};

export const updateHits = hits => {
  return {
    type: 'UPDATE_HITS',
    payload: { hits }
  }
};
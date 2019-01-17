const INITIAL_STATE = {
  query: '',
  hits: null
};

export const sideMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.payload.query
      }

    case 'UPDATE_HITS':
      const filteredHits = action.payload.hits.
        filter(hit => {
          const { value } = hit._highlightResult.administrative[0];
          return value !== 'Puerto Rico';
        });

      return {
        ...state,
        hits: filteredHits
      }

    default:
      return state;
  }
};
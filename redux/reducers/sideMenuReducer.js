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
      return {
        ...state,
        hits: action.payload.hits
      }

    default:
      return state;
  }
};
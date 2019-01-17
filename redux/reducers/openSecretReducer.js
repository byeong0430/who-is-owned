const INITIAL_STATE = {
  legislatorSummary: null
};

export const openSecretReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_LEGISLATORS':
      return {
        ...state,
        legislatorSummary: action.payload.legislatorSummary
      }

    default:
      return state;
  }
};
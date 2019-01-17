export const updateLegislators = legislatorSummary => {
  return {
    type: 'UPDATE_LEGISLATORS',
    payload: { legislatorSummary }
  }
};
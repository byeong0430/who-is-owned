// Functions used in multiple components

export const joinArrayStr = (array, joiner) => {
  return array.filter(item => {
    // If item is an array, select the first item
    if (typeof item === 'object' && item !== null) {
      item = item[0];
    }
    return item !== undefined
  }).join(joiner)
};
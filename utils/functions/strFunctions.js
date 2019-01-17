// Functions used in multiple components

export const joinArrayStr = (array, joiner) => {
  const filteredArr = [];

  array.forEach(item => {
    if (item === null || item === undefined) {
      return false;
    }

    if (typeof item === 'object') {
      filteredArr.push(item[0]);
    } else {
      filteredArr.push(item);
    }
  })

  return filteredArr.join(joiner);
};
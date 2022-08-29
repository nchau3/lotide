const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const char of array[i]) {
        newArray.push(char);
      }
    } else {
      newArray.push(array[i]);
    }
  } return newArray;
};

module.exports = flatten;
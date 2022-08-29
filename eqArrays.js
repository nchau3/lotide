const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  };
  for (let i = 0; i < array1.length; i++) {
    if (result === false) {
      return result;
    } else {
      if (Array.isArray(array1[i])) {
        result = eqArrays(array1[i], array2[i]);
      } else {
        if (array1[i] !== array2[i]) {
          result = false;
        }
      }
    }
  } return result;
};

module.exports = eqArrays;
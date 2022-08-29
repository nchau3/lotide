const findKeyByValue = function(object, value) {
  let result = '';
  for (const key in object) {
    if (object[key] === value) {
      result = key;
    }
  }
  if (result === '') {
    return undefined;
  } else {
  return result;
  }
};

module.exports = findKeyByValue;
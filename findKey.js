const findKey = function(object, callback) {
  let result = '';
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
};

module.exports = findKey;
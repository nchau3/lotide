const eqArrays = require('./eqArrays');

//checks if an entry is an object (not array or null)
const isObject = function(input) {
  if ((typeof input === 'object') && (Array.isArray(input) === false) && (input !== null)) {
    return true;
  } else {
    return false;
  }
};

//alphabetize elements in array, from MDN docs on array.sort
const alphabetize = array => array.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

//returns all keys of given object as a string, in alphabetical order (accounts for same keys/values in different orders)
const getKeys = object => alphabetize(Object.keys(object)).join('');

const eqObjects = function(object1, object2) {
  let result = true;
  let keys1 = getKeys(object1);
  let keys2 = getKeys(object2);
  //not same keys? - return FALSE
  if (keys1 !== keys2) {
    result = false;
    return result;
  }
  for (const key in object1) {
    //key value is not an object? compare values
    if (!isObject(object1[key])) {
    //is array? NO
      if (!Array.isArray(object1[key])) {
        //values not the same? return FALSE
        if ((object1[key] !== object2[key])) {
          result = false;
          return result;
        }
        //is array? compare array values
      } else {
        if (!eqArrays(object1[key], object2[key])) {
          result = false;
        }
      }
    //value is object? initiate RECURSION, store return value in original "result"
    } else {
      result = eqObjects(object1[key], object2[key]);
    }
  } return result;
};

module.exports = eqObjects;


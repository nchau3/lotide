const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  } return result;
};

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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}}`);
  }
};

/*TEST CODE
const test1 = {a: 6, b: 44};
const test2 = {a: 6, b: 44};
const test3 = {a: 6, b: 44, c: 33};
const test4 = {a: 6, b: 43};

assertObjectsEqual(test1, test2); //pass
assertObjectsEqual(test1, test4); //fail
assertObjectsEqual(test1, test3); //fail */
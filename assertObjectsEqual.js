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

const eqObjects = function(object1, object2) {
  let result = true;
  const keysLength1 = Object.keys(object1).length;
  const keysLength2 = Object.keys(object2).length;
  if (keysLength1 !== keysLength2) {
    result = false;
  } else if (keysLength1 === keysLength2) {
    for (const key in object1) {
      if (!Array.isArray(object1[key])) {
        if (object1[key] !== object2[key]) {
          result = false;
        }
      } else if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          result = false;
        }
      }
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
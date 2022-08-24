const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  } return result;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays(actual, expected) === false) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}}`);
  }
};

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = newArray.filter(element => element !== itemsToRemove[i]);
  } return newArray;
};

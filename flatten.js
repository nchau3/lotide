const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  } return result;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("✅✅✅ Assertion Passed: " + array1 + " === " + array2);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}}`);
  }
};

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
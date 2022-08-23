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

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = newArray.filter(element => element !== itemsToRemove[i]);
  } return newArray;
};

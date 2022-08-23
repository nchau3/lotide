const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let result = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    }
  } return result;
};

assertEqual(eqArrays(["test", "testing"], ["test", "testing"]), true); //pass
assertEqual(eqArrays(["test", "testing"], ["test", "resting"]), true); //fail
assertEqual(eqArrays([450, 956], [450, 956]), true); //pass
assertEqual(eqArrays([450, 956], [450, '956']), true); //fail
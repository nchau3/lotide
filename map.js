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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } return results;
};

//TEST CODE
const bowie = ["ground", "control", "to", "major", "tom"];
const numbers = [4, 33, 46, 1, 90];
const dramaticPause = word => word += "...";
const firstLetter = word => word[0];
const subtractTwo = num => num - 2;

assertArraysEqual(map(bowie, firstLetter), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, subtractTwo), [2, 31, 44, -1, 88]);
assertArraysEqual(map(bowie, dramaticPause), ["ground...", "control...", "to...", "major...", "tom..."]);
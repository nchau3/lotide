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

const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }
};

//TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["dog", "monkey", "elephant", "hippopotamus", "bird"];
const longerThanEight = word => word.length > 8;

const data4 = [22, 4, 17, 39, 99];
const multipleOfThirteen = num => num % 13 === 0;

assertArraysEqual(takeUntil(data3, longerThanEight), ["dog", "monkey", "elephant"]);
assertArraysEqual(takeUntil(data4, multipleOfThirteen), [22, 4, 17]);
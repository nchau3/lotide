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
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middleArray = [];
  const middleIndex = Math.floor(array.length / 2);
  //check for at least 3 elements
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      middleArray.push(array[middleIndex])
    }
    else if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1]);
      middleArray.push(array[middleIndex]);
    }
  } return middleArray;
};

// TEST CODE
assertArraysEqual(middle([1, 5]), []);
assertArraysEqual(middle([6]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle(['dog', 'cat', 'monkey', 'bird', 'donkey']), ['monkey']);
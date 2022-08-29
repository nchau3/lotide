const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  };
  for (let i = 0; i < array1.length; i++) {
    if (result === false) {
      return result;
    } else {
      if (Array.isArray(array1[i])) {
        result = eqArrays(array1[i], array2[i]);
      } else {
        if (array1[i] !== array2[i]) {
          result = false;
        }
      }
    }
  } return result;
};

module.exports = eqArrays;

//TEST CODE
//assertEqual(eqArrays(["test", "testing"], ["test", "testing"]), true); //pass
//assertEqual(eqArrays(["test", "testing"], ["test", "resting"]), false); //fail
//assertEqual(eqArrays([450, 956], [450, 956]), true); //pass
//assertEqual(eqArrays([450, 956], [450, '956']), false); //fail

//TESTS FOR NESTED ARRAYS (RECURSION)
//const testArray1 = [11, 22, [33, 44], [55, 66, [77, [88]]], 99];
//const testArray2 = [11, 22, [33, 44], [55, 66, [77, [88]]], 99];
//const testArray3 = [11, 22, [33, 44], [55, 66, [77, [87]]], 99];
//const testArray4 = [11, 22, [33, 44], [55, 66, [77, [88]]], 97];
//
//assertEqual(eqArrays(testArray1, testArray2), true);
//assertEqual(eqArrays(testArray1, testArray3), false);
//assertEqual(eqArrays(testArray1, testArray4), false);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//compares values of 2 arrays
const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  }
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

/*
//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const test1 = { a: { f: 1 }, b: 3, c: { d: { e : 1}}};
const test2 = { a: { f: 1 }, b: 3, c: { d: { e : 1}}};
const test3 = { a: { y: 0, z: 1 }, b: 2 };
const test4 = { a: 1, b: 2 };

assertEqual(eqObjects(test1, test2), true);
assertEqual(eqObjects(test1, test3), false);
assertEqual(eqObjects(test3, test4), false); */

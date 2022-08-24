const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
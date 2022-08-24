const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {};
  for (const char of string) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  } return result;
};

// TEST CODE
const testResult = countLetters("testingfunctionality");

assertEqual(testResult['t'], 4);
assertEqual(testResult['i'], 3);
assertEqual(testResult['f'], 1);
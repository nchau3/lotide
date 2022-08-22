const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length >= 1) {
    return array.slice(1);
  } else {
    return [];
  }
};

console.log(tail([]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

const words = ["first", "second", "third"];
tail(words);
assertEqual(words.length, 3);
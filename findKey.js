const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let result = '';
  for (const key in object) {
    if (callback(object[key])) {
      result = key;
      return result;
    }
  }
};

//TEST CODE
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

const data1 = {
  Bill: {
    firstName: "Bill",
    lastName: "Smith",
    age: 25
  },
  Jane: {
    firstName: "Jane",
    lastName: "Smith",
    age: 30
  },
  George: {
    firstName: "George",
    lastName: "of the Jungle",
    age: 35
  }
};

assertEqual(findKey(data1, x => x.lastName === "of the Jungle"), "George");
assertEqual(findKey(data1, x => x.age > 25), "Jane");
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
};

// TEST CODE
const firstNames = [
  'Bob',
  'Robert',
  'Kelsey',
  'Kelsey',
  'Robert',
  'Jason',
  'Robert',
  'Robert'];

const result1 = countOnly(firstNames, {'Robert': true, 'Kelsey': true, 'Bob': false, 'Jason': false});

assertEqual(result1['Robert'], 4);
assertEqual(result1['Kelsey'], 2);
assertEqual(result1['Bob'], undefined);
assertEqual(result1['Jason'], undefined);

const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  const firstNames = [
    'Bob',
    'Robert',
    'Kelsey',
    'Kelsey',
    'Robert',
    'Jason',
    'Robert',
    'Robert'];

  it("returns a count on a specified value within a given array", () => {
    assert.deepEqual(countOnly(firstNames, {Robert: true}), {Robert: 4});
  });

  it("returns counts on ONLY the specified strings in an object", () => {
    const result1 = {'Robert': true, 'Kelsey': true, 'Bob': false, 'Jason': false};
    assert.deepEqual(countOnly(firstNames, result1), {'Robert': 4, 'Kelsey': 2}); 
  });

});

/*
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
*/
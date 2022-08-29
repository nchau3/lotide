const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  
  it("returns a portion of given array until callback condition has been met (number)", () => {
    const testArray = [22, 4, 17, 39, 99];
    const multipleOfThirteen = num => num % 13 === 0;
    assert.deepEqual(takeUntil(testArray, multipleOfThirteen), [22, 4, 17])
  });

  it("returns a portion of given array until callback condition has been met (string)", () => {
    const testArray = ["dog", "monkey", "elephant", "hippopotamus", "bird"];
    const longerThanEight = word => word.length > 8;
    assert.deepEqual(takeUntil(testArray, longerThanEight), ["dog", "monkey", "elephant"])
  });

});
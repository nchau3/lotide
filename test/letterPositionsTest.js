const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  
  it("returns object with all indices of given character in a string", () => {
    const testString = "puppy";
    assert.deepEqual(letterPositions(testString), {
      p: [0, 2, 3],
      u: [1],
      y: [4]
    });
  });

});
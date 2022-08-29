const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  
  it("returns a de-nested array (one level of nesting only)", () => {
    const testArray = [1, 2, [3, 4], 5, [6, 7, 8]];
    assert.deepEqual(flatten(testArray), [1, 2, 3, 4, 5, 6, 7, 8]);
  });

});
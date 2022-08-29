const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  
  it("returns a new array with selected items removed (no nesting)", () => {
    const testArray = [1, 2, 3, 45, 4];
    assert.deepEqual(without(testArray, [45]), [1, 2, 3, 4]);
  });

});
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  
  it("returns empty array when passed an array with 2 elements", () => {
    assert.deepEqual(middle([1, 5]), []);
  });

  it("returns empty array when passed an array with 1 element", () => {
    assert.deepEqual(middle([6]), []);
  });

  it("returns 2 middle elements for array with even length", () => {
    const testArray = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(middle(testArray), [3, 4]);
  });

  it("returns 1 middle elements for array with odd length", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7]
    assert.deepEqual(middle(testArray), [4]);
  });

  it("returns 1 middle elements for array with odd length (strings)", () => {
    const testArray = ['dog', 'cat', 'monkey', 'bird', 'donkey'];
    assert.deepEqual(middle(testArray), ['monkey']);
  });

});
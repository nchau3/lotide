const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  
  it("returns a new array where each element has passed through the callback function (numbers)", () => {
    const testArray = [4, 33, 46, 1, 90];
    const subtractTwo = num => num - 2;
    assert.deepEqual(map(testArray, subtractTwo), [2, 31, 44, -1, 88]);
  });

  it("returns a new array where each element has passed through the callback function (strings)", () => {
    const testArray = ["ground", "control", "to", "major", "tom"];
    const dramaticPause = word => word += "...";
    assert.deepEqual(map(testArray, dramaticPause), ["ground...", "control...", "to...", "major...", "tom..."]);
  });

});
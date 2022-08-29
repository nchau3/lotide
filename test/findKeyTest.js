const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {

  it("returns keys that meet condition of callback function", () => {
    const testObject = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
    };
    assert.strictEqual(findKey(testObject, x => x.stars > 1), 'Akaleri');
  });

});
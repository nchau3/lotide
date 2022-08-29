const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const musiciansByGenre = {
    jazz: 'Chet Baker',
    folk: 'Pete Seeger',
    blues: 'Son House',
    classical: 'Ingrid Haebler'
  };

  it("returns correct key based on given value", () => {
    assert.strictEqual(findKeyByValue(musiciansByGenre, 'Son House'), 'blues');
  });

  it("returns undefined if given value does not exist", () => {
    assert.isUndefined(findKeyByValue(musiciansByGenre, 'Elvis Presley'));
  });

});
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  
  it("returns an object with the correct count of letters in given string", () => {
    assert.deepEqual(countLetters("test"), {t: 2, e: 1, s: 1});
  });

  it("returns an object with the correct count of specified index in string", () => {
    const testString = "function";
    assert.deepEqual(countLetters(testString[3]), {c: 1}); 
  });

});
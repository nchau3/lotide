const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  
  it("returns empty array when passed an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']); 
  });

  it("returns ['second', 'third'] for ['first', 'second', 'third']", () => {
    assert.deepEqual(tail(["first", "second", "third"]), ["second", "third"]); 
  });

});
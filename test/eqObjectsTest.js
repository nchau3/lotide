const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  
  it("returns true for identical objects (regardless of key order)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for non-identical objects", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true for identical objects (nested)", () => {
    const test1 = { a: { f: 1 }, b: 3, c: { d: { e : 1}}};
    const test2 = { a: { f: 1 }, b: 3, c: { d: { e : 1}}};
    assert.isTrue(eqObjects(test1, test2));
  });

  it("returns false for non-identical objects (nested)", () => {
    const test1 = { a: { f: 1 }, b: 3, c: { d: { e : 1}}};
    const test2 = { a: { f: 1 }, b: 3, c: { d: { e : 6}}};
    assert.isFalse(eqObjects(test1, test2));
  });

});
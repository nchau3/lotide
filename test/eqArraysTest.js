const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  
  it("returns true for identical arrays (no nesting)", () => {
    const testArray1 = ["test", "testing"];
    const testArray2 = ["test", "testing"];
    assert.isTrue(eqArrays(testArray1, testArray2));
  });

  it("returns false for non-identical arrays", () => {
    const testArray1 = ["test", "testing"];
    const testArray2 = ["test", "testing!"];
    assert.isFalse(eqArrays(testArray1, testArray2));
  });

  it("returns true for identical arrays (nested)", () => {
    const testArray1 = [11, 22, [33, 44], [55, 66, [77, [88]]], 99];
    const testArray2 = [11, 22, [33, 44], [55, 66, [77, [88]]], 99];
    assert.isTrue(eqArrays(testArray1, testArray2));
  });

  it("returns false for non-identical arrays (nested)", () => {
    const testArray1 = [11, 22, [33, 44], [55, 66, [77, [88]]], 99];
    const testArray2 = [11, 22, [33, 44], [55, 66, [76, [88]]], 99];
    assert.isFalse(eqArrays(testArray1, testArray2));
  });

});
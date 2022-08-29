const assertEqual = require('../assertEqual');
const head = require('../head');

const testArray1 = [1, 3, 5, 4];
const testArray2 = [];

assertEqual(head(testArray1), 1);
assertEqual(head(testArray2), undefined);
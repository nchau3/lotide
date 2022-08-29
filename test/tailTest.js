const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const tail = require('../tail');

assertEqual(eqArrays(tail([]), []), true);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(eqArrays(result, ["Lighthouse", "Labs"]), true);

const words = ["first", "second", "third"];
assertEqual(eqArrays(tail(words), ["second", "third"]), true);


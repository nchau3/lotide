const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 5]), []); //pass
assertArraysEqual(middle([6]), []); //pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //pass
assertArraysEqual(middle(['dog', 'cat', 'monkey', 'bird', 'donkey']), ['monkey']); //pass
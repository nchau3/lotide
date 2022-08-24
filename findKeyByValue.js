const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let result = '';
  for (const key in object) {
    if (object[key] === value) {
      result = key;
    }
  } return result;
};

// TEST CODE
const musiciansByGenre = {
  jazz: 'Chet Baker',
  folk: 'Pete Seeger',
  blues: 'Son House',
  classical: 'Ingrid Haebler'
};

assertEqual((findKeyByValue(musiciansByGenre, 'Son House')), 'blues'); //'blues'
assertEqual((findKeyByValue(musiciansByGenre, 'Pete Seeger')), 'folk'); // 'folk'
assertEqual((findKeyByValue(musiciansByGenre, 'Elvis Presley')), undefined); // undefined, key does not exist
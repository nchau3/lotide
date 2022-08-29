const middle = function(array) {
  let middleArray = [];
  const middleIndex = Math.floor(array.length / 2);
  //check for at least 3 elements
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      middleArray.push(array[middleIndex]);
    } else if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1]);
      middleArray.push(array[middleIndex]);
    }
  } return middleArray;
};

module.exports = middle;
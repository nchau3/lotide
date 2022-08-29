const without = function(source, itemsToRemove) {
  let newArray = source;
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = newArray.filter(element => element !== itemsToRemove[i]);
  } return newArray;
};

module.exports = without;
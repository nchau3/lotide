const countLetters = function(string) {
  const result = {};
  for (const char of string) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  } return result;
};

const test = "testingnnn"
console.log(countLetters(test[3]));

module.exports = countLetters;
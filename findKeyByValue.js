// Function that takes in an object and a value, and returns the first key that contains that value.

const findKeyByValue = function(obj, item) {
  // return the appropriate key. If no match, return undefined
  for (const key in obj) {
    if (obj[key] === item) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
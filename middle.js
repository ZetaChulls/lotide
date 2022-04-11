// Function which will extract the items present in the middle of an array. Takes a single array as an arguement.
const middle = function(originalArray) {
  if (originalArray.length <= 2) {
    return [];
  }
  // find where the middle is. If it's an array with middle index of a whole number of return two elements.
  let middleIndex = originalArray.length / 2;

  if (middleIndex % 1 !== 0) {
    return originalArray.slice(Math.floor(middleIndex), Math.floor(middleIndex) + 1);
  } else {
  // extract and return those elements
    return originalArray.slice(middleIndex - 1, middleIndex + 1);
  }
};

module.exports = middle;

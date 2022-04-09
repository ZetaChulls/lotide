// Helper function to compare two arrays.

const eqArrays = function(array1, array2) {
  // check if the arrays are the same length first
  if (array1.length !== array2.length) {
    return false;
  }
  // iterate through the array and compare the values at the same index. If any values dont match, return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Helper function to perform assertion afterwards.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

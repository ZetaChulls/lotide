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

// Assertion logging
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function that removes specified items in an array and returns the result as a new array.

// function will accept 2 arguments, an array, and any items to be removed
const without = function(source, itemsToRemove) {
  return source.filter((element) => !itemsToRemove.includes(element));
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3', '1']), ['2']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


module.exports = without;
// Helper function to check for assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function will take in two arrays and compare both values at the same index and return true if they all match.

const eqArrays = function(array1, array2) {
// check if the arrays are the same length first
  if (array1.length !== array2.length) {
    return false;
  }
  // iterate through the array and compare the values at the same index. If any values dont match, return false;
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      eqArrays(array1[i], array2[i]);
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([["1", "2", "3"]], [["1", "2", "3"]]), true);
assertEqual(eqArrays([[[[["1", "2", "3"]]], [1]]], [[[[["1", "2", "3"]]], [1]]]), true);

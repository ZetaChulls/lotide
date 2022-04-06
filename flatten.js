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

// helper function to check for assertion in arrays. 
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function to flatten embedded arrays into a single array
// Takes an array as an arguement and will return an array with no arrays as elements

const flatten = function(array) {
  let output = [];
  for (let item of array) {
    if (Array.isArray(item)){
      item.forEach((element => output.push(element)));
    } else {
      output.push(item);
    }
  }
  return output;
};

const words = ['Hi', 'Hello', ['Goodbye', 'Adios']]

assertArraysEqual(flatten(words), ['Hi', 'Hello', 'Goodbye', 'Adios']);
assertArraysEqual(flatten([1, [2, 3], 4, [5 , 6]]), [1, 2, 3, 4, 5, 6]);
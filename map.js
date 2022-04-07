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

// Helper function to perform array assertion
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function to perform mapping on all array elements.
const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

const testArray1 = ['bacon', 'gravy', 'soda'];
const testArray2 = [1, 2, 3]
const testArray3 = [3, 2, 1]


assertArraysEqual(map(testArray1, word => word[0]), ['b', 'g', 's']);
assertArraysEqual(map(testArray2, num => num * 2), [2, 4, 6]);
assertArraysEqual(map(testArray3, num => num > 2), [true, false, false]);

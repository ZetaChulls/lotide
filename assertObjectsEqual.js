// Helper function to check if arrays are equal
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
  
// Helper to assess if two objects are equal.
const eqObjects = function(object1, object2) {
  // first handle objects of primitaves
  // seperate the keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // check to see if object 1 and object 2 have the same amount of keys.
  if (object1Keys.length !== object2Keys.length) return false;


  // check the keys then the values to see if they have non-matching elements.
  for (let keys of object1Keys) {
    // Also check to see if either of the values are arrays. If so, run eqArray instead of checking the values directly
    if (Array.isArray(object1[keys]) || Array.isArray(object1[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    // compare the values in each key to ensure it's the same.
    } else if (!object2Keys.includes(keys) || !object2[keys].includes(object1[keys])) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });

// Helper function to check for assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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
  
// Returns true if both objects have identical key-value pairs
// Otherwise will return a big fat false! >:D

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
      if (!eqArrays(object1[keys], object2[keys])){
        return false;
      }
    // compare the values in each key to ensure it's the same.
    } else if (!object2Keys.includes(keys) || !object2[keys].includes(object1[keys])) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

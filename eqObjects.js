const eqArrays = require('./eqArrays');
  
// Returns true if both objects have identical key-value pairs

const eqObjects = function(object1, object2) {
  // first handle objects of primitaves
  // seperate the keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // check to see if object 1 and object 2 have the same amount of keys.
  if (object1Keys.length !== object2Keys.length) return false;

  // check the keys then the values to see if they have non-matching elements.
  for (let keys of object1Keys) {
    if (typeof object1[keys] === 'object' && !Array.isArray(object1[keys]) || typeof object2[keys] === 'object' && !Array.isArray(object2[keys])) {
      eqObjects(object1[keys], object2[keys]);
    }
    // Also check to see if either of the values are arrays. If so, run eqArray instead of checking the values directly
    if (Array.isArray(object1[keys]) || Array.isArray(object1[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    // compare the values in each key to ensure it's the same.
    } else if (!object2Keys.includes(keys)) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
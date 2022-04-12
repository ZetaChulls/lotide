// Function that takes an object and a callback. Will scan the object and
// return the first key when the callback is truthy if no key found, return undefined

const findKey = (object, callback) => {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
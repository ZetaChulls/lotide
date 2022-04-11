// helper function to perform assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function that takes an object and a callback. Will scan the object and
// return the first key when the callback is truthy if no key found, return undefined

const findKey = (object, callback) => {

  console.log(callback(object["noma"]));
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};


// Test samples
const testItem = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(testItem, "noma");
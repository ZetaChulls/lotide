// Helper function to determine assertion

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

// Function that takes in an object and a value, and returns the first key that contains that value.


// Function declaration. Takes 2 arguments, object and value
// const findKeyByValue = function(obj, item) {
//   // return the appropriate key. If no match, return undefined
//   let result;
//   let index = 0;
//   const objectKeys = Object.keys(obj)
//   for (const value of Object.values(obj)) {
//     if (item === value) {
//       return objectKeys[index];
//     }
//     index++
//   }

//   return result;
// }

// refactored above to use for..in and cycle through until a matching item is found.
const findKeyByValue = function(obj, item) {
  // return the appropriate key. If no match, return undefined
  for (const key in obj) {
    if (obj[key] === item) {
      return key;
    }
  }
};


const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "The Dark Knight",
  youth: "Harry Potter"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Dark Knight"), "action");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Harry Potter"), "youth");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
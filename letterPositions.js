// Helper functions for assertion

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function that takes in a sentence and outputs and object indicating where those letters appear based on their indices
// { l: [0], i: [1, 11], g: [2] ....}


// Declare the function, will accept a string as an input
const letterPositions = function(sentence) {
  // implement error handling for correct input type.
  if (typeof sentence !== "string") return "Error, please enter a sentence";
  // declare output variable. Will need to assign keys dynamically.
  const output = {};
  // trim all spaces from the sentence
  const longSentence = sentence.replaceAll(' ', '');
  // loop through the sentence.
  for (let i = 0; i < longSentence.length; i++) {
    if (!output[longSentence[i]]) {
      // if the character has never appeared, create a new key for that character and set the value to the current index
      output[longSentence[i]] = [i];
    } else {
      // if the character has appeared before, add another
      output[longSentence[i]].push(i);
    }
  }
  // Output will be an object with letters as the keys and arrays of indices as the values.
  return output;
};


assertArraysEqual(letterPositions("testing").t, [0, 3]);
assertArraysEqual(letterPositions("testing").s, [2]);
assertArraysEqual(letterPositions("testing").e, [1]);


module.exports = letterPositions;
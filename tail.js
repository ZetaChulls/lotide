// Helper function to check results.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function that takes an array and returns everything but the first item in the array.

const tail = function(array) {
  return array.slice(1);
};

// Sample words to test with
const words = ["Knicks", "Nets", "Jazz"];

// Checking to see if the function modifies the original array.
let result = tail(words);
assertEqual(words.length, 3);

// Test cases
assertEqual(result[0], "Nets");
assertEqual(result[1], "Jazz");
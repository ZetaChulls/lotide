// Importing function to test.
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Sample words to test with
const words = ["Knicks", "Nets", "Jazz", "Lakers", "Kings", "Spurs"];

// Checking to see if the function modifies the original array.
let result = tail(words);

// Test cases
assertEqual(words.length, 6);
assertEqual(result[0], "Nets");
assertEqual(result[4], "Spurs");

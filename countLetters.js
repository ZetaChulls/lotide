// A function that takes a sentence and returns a count for how often that letter appears in the sentence.

// Function declaration
const countLetters = function(sentence) {
  // Declare output variable.
  const output = {};
  // Remove all spaces from the strings
  const longSentence = sentence.replaceAll(' ', '');
  // Loop through the long string.
  for (let char of longSentence) {
    // If the letter has appeared, increment the counter for that letter by 1
    if (output[char]) {
      output[char]++;
    } else {
      // If the letter has not appeared, create the key for the letter and set it to 1
      output[char] = 1;
    }
  }
  // Return an object which has the keys as the letters present and the value as how often they appeared.
  return output;
};

module.exports = countLetters;
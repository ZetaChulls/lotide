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

module.exports = letterPositions;
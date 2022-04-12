// Function that will take an array and return every item until a condition is fulfilled.
// Condition will be a callback

const takeUntil = function(array, callback) {
  let output = [];

  // iterate through the entire array
  for (const element of array) {
    // continue to add elements to the output until the condition is fulfilled.
    if (!callback(element)) {
      output.push(element);
    } else {
      return output;
    }
  }
  // breakout statement incase the condition is not fulfilled.
  return output;
};

module.exports = takeUntil;

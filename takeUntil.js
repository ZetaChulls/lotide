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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log("Expected output: [ 1, 2, 5, 7, 2 ], actual output: ", results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log("Expected output: [ 'I've', 'been', 'to', 'Hollywood' ], Actual output: ", results2);


module.exports = takeUntil;

// Importing function to test.
const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {
  it("Will return the middle item if passed an array with an odd number of items.", () => {
    const words = ["Knicks", "Nets", "Jazz", "Lakers", "Kings"];
    assert.deepEqual(middle(words), ["Jazz"]);
  });

  it("Will return the middle two items if passed an array with an even number of items.", () => {
    const words = ["Knicks", "Nets", "Jazz", "Lakers", "Kings", "Spurs"];
    assert.deepEqual(middle(words), ["Jazz", "Lakers"]);
  });

  it("Will return an empty array if passed an array with less than 2 items", () => {
    const words = ["Knicks", "Nets"];
    assert.deepEqual(middle(words), []);
  });

});

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

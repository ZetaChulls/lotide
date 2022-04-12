const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  
  it("returns [2, 3] ", () => {
    assert.deepStrictEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  
  it("returns ['1', '2']", () => {
    assert.deepStrictEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
  
  it("returns ['2']", () => {
    assert.deepStrictEqual(without(['1', '2', '3'], [1, 2, '3', '1']), ['2']);
  });

  it("returns ['hello', 'world', 'lighthouse']", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepStrictEqual(words, ["hello", "world", "lighthouse"]);

  });
});


// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
// assertArraysEqual(without(['1', '2', '3'], [1, 2, '3', '1']), ['2']);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

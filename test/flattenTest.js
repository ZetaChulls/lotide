const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  
  it("returns ['Hi', 'Hello', 'Goodbye', 'Adios']", () => {
    assert.deepEqual(flatten(['Hi', 'Hello', ['Goodbye', 'Adios']]), ['Hi', 'Hello', 'Goodbye', 'Adios']);
  });

  it("returns [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, [2, 3], 4, [5 , 6]]), [1, 2, 3, 4, 5, 6]);
  });

});

module.exports = flatten;
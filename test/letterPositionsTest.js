const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  
  it("returns '{ t: [0, 3], e: [1], s: [2] }'", () => {
    assert.deepEqual(letterPositions('test'), { t: [0, 3], e: [1], s: [2] });
  });
  
  it("returns '{ a: [0, 1, 2, 3, 4, 5] }'", () => {
    assert.deepEqual(letterPositions('aaaaaa'), { a: [0, 1, 2, 3, 4, 5] });
  });

});

module.exports = letterPositions;
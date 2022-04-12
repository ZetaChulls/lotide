const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  it("returns '['g', 'c', 't', 'm', 't']'", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  
  it("returns '[2, 4, 6]'", () => {
    assert.deepEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
  });
  
  it("returns '[true, false, false]'", () => {
    assert.deepEqual(map([3, 2, 1], num => num > 2), [true, false, false]);
  });

  
});
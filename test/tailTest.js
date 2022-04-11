// Importing function to test.
const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("Will be array.length - 1 after running tail", () => {
    const words = ["Knicks", "Nets", "Jazz", "Lakers", "Kings", "Spurs"];
    const output = tail(words).length;
    assert.strictEqual(output, 5);
  });
  
  it("Will return an array without it's head", () => {
    const words = ["Knicks", "Nets", "Jazz", "Lakers", "Kings", "Spurs"];
    assert.deepEqual(tail(words), ["Nets", "Jazz", "Lakers", "Kings", "Spurs"]);
  });

  
  it("Will return undefined if passed a single item in an array", () => {
    const words = ["Knicks"];
    assert.strictEqual(tail(words)[0], undefined);
  });

  it("Will return undefined if passed an empty array", () => {
    const words = [];
    assert.strictEqual(tail(words)[0], undefined);
  });

});


// Importing function to test.
const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {

  it("returns {} when entered '' ", () => {
    assert.deepEqual(countLetters(""), {});
  });
  
  it("returns { a : 1 } when entered 'a' ", () => {
    assert.deepEqual(countLetters("a"), { a: 1 });
  });

  it("returns { h: 1, e: 1, l: 2, o: 1} when entered 'hello' ", () => {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1});
  });

  it("returns { L: 2, H: 1} when entered 'LHL' ", () => {
    assert.deepEqual(countLetters("LHL"), { L: 2, H:1 });
  });

});

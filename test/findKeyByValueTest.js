const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  
  const bestTVShowsByGenre = {
    scifi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire",
    action: "The Dark Knight",
    youth: "Harry Potter"
  };

  it("returns 'action' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Dark Knight"), 'action');
  });

  it("returns 'drama' ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("returns undefined ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});

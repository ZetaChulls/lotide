const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  
  const testItem = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it("returns 'noma' ", () => {
    assert.strictEqual(findKey(testItem, x => x.stars === 2), 'noma');
  });

  it("returns undefined when no match is present ", () => {
    assert.strictEqual(findKey(testItem, x => x.stars === 4), undefined);
  });

});
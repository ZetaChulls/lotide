// Importing function to test.
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  it("returns { a: 1} when entered passed ['a', 'b', 'c', 'd', 'e'], {'a' : true}  ", () => {
    const string = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(countOnly(string, {'a' : true}), { a : 1 });
  });

  it("returns { a: 1, b: 1} when entered passed ['a', 'b', 'c', 'd', 'e'], {'a' : true, 'b': true}  ", () => {
    const string = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(countOnly(string, {'a' : true, 'b': true}), { a : 1, b: 1 });
  });
  
  it("returns { a: 1, b: 1} when entered passed ['a', 'b', 'c', 'd', 'e'], {'a' : true, 'b': true, 'c': false}  ", () => {
    const string = ['a', 'b', 'c', 'd', 'e'];
    assert.deepEqual(countOnly(string, {'a' : true, 'b': true, 'c': false}), { a : 1, b: 1 });
  });

  it("returns { a : 4} when entered passed ['a', 'a', 'a', 'a', 'e'], {'a' : true}  ", () => {
    const string = ['a', 'a', 'a', 'a', 'e'];
    assert.deepEqual(countOnly(string, {'a' : true}), { a : 4 });
  });

  it("returns {} when entered passed ['a', 'a', 'a', 'a', 'e'], {}  ", () => {
    const string = ['a', 'a', 'a', 'a', 'e'];
    assert.deepEqual(countOnly(string, {'a' : true}), { a : 4 });
  });

});

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
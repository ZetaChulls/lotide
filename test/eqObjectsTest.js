const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  it("returns true for { a: '1', b: '2' } compared to { a: '1', b: '2' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { a: "1", b: "2" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns true for { a: '1', b: '2' } compared to { 'b': 2, a: '1' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for { a: '1', b: '2' } compared to { a: '1', b: '2', c: '3' }", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true for { c: '1', d: ['2', 3] } compared to { d: ['2', 3], c: '1' }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });
  
  it("returns false for { c: '1', d: ['2', 3] } compared to { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2));
  });
  
  it("returns true for { a: { z: [1] }, b: [2] } compared to {  b: [2] , a: { z: [1] }}", () => {
    const ab = { a: { z: [1] }, b: [2] };
    const ba = {  b: [2] , a: { z: [1] }};
    assert.isTrue(eqObjects(ab, ba));
  });

});

// assertEqual(eqObjects({ a: { z: [1] }, b: [2] }, {  b: [2] , a: { z: [1] }},), true);
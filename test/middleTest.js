const assert = require('chai').assert;

const middle = require('../middle');

describe("#middle", () => { 

it("should return the two middle values '(3, 4)' when passed an array of even length", () => {
  assert.deepStrictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});

it("should return the one middle value '3' when passed an array of odd length", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
});

it ("should return an empty array '[]' when passed an array with one or two elements", () => {
  assert.deepStrictEqual(middle([1, 2]), []);
});


});

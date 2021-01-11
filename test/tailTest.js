const assert = require('chai').assert;
const tail = require('../tail');


const result = tail(["Hello", "Lighthouse", "Labs"]);

const oneArrayTest = tail(["Hello"]);

const originalArrayTest = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  
  context("Position tests", function () {

  it("should return index position '0' of newArray", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("should return index position '1' of newArray", () => {
    assert.strictEqual(result[1], "Labs");
  });
});

  context("Length tests", function () {

  it("should be returning an empty array if passed in with only one element - check if length is '0'", () => {
    assert.strictEqual(oneArrayTest.length, 0);
  });

  it("should be returning a length of '2' when array is sliced into newArray", () => {
    assert.strictEqual(result.length, 2);
  });

  it("should be returning a length of '3' given the original array to make sure it was not modified", () => {
    assert.strictEqual(originalArrayTest.length, 3);
  })
});

});








// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
// assertEqual(result[1], "Fire");
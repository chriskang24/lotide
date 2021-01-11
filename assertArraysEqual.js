const eqArrays = require('./eqArrays');

function assertArraysEqual(arrayOne, arrayTwo) {
  
  if (eqArrays(arrayOne, arrayTwo)) {
  console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
  console.log(`🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
}
};

// assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3", "4"])

module.exports = assertArraysEqual;
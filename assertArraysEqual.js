function assertEqual(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

function eqArrays(firstComparison, secondComparison) {

  if (firstComparison.length !== secondComparison.length) {
    return false;
  }

  for (let i = 0; i < firstComparison.length; i++) {

      if (firstComparison[i] !== secondComparison[i]) {
        return false;
    } 
  }
    return true;
  };



function assertArraysEqual(arrayOne, arrayTwo) {
  
  if (eqArrays(arrayOne, arrayTwo)) {
  console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
  console.log(`🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
}
};

assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3", "4"])

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



function letterPositions(sentence) {
  
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

// console.log(assertEqual(letterPositions("lighthouse in the house"), [])

// console.log(assertEqual(eqArrays(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]),true))

const letterPositionTest = letterPositions("lighthouse in the house").h

const eqArraysTest = eqArrays(letterPositionTest, [3, 5, 15, 18])

const assertEqualTest = assertEqual(eqArraysTest, true)

console.log(assertEqualTest)

// console.log(letterPositions("lighthouse in the house").h)
const assertEqual = require('./assertEqual');

function eqArrays(firstComparison, secondComparison) {

  console.log(firstComparison.length === secondComparison.length)

  if (firstComparison.length !== secondComparison.length) {
    return false;
  }

  for (let i = 0; i < firstComparison.length; i++) {

    console.log("first comparison for loop: ", firstComparison[i])
    console.log("second comparison for loop: ", secondComparison[i])

    if (firstComparison[i] !== secondComparison[i]) {
      return false;
    }
  }
  return true;
};



// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

module.exports = eqArrays;

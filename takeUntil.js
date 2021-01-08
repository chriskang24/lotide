function eqArrays(firstComparison, secondComparison) {

  // console.log(firstComparison.length === secondComparison.length)

  if (firstComparison.length !== secondComparison.length) {
    return false;
  }

  for (let i = 0; i < firstComparison.length; i++) {

    // console.log("first comparison for loop: ", firstComparison[i])
    // console.log("second comparison for loop: ", secondComparison[i])

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


const takeUntil = function (list, callback) {

  for (let item of list) {

    if (callback(item)) {
      return list.slice(0, list.indexOf(item))
    } 
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]));
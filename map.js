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


const words = ["ground", "control", "to", "major", "tom"];
const abbreviationTest = ["Leonard", "Mika", "Oz", "Ellie", "David"]

const mapTest1 = []

const map = function (array, callback) {

  const results = [];
  for (let item of array) {

    // add console.logs from below here to debug

    results.push(callback(item))
  }
  return results;
}

const results1 = map(words, word => word[0]);
// console.log(results1);

const results2 = map(abbreviationTest, lastChar => lastChar.slice(-1))
// console.log(results2);



// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [ 'd', 'a', 'z', 'e', 'd' ])



// console.log('item BEFORE: ', item);
// console.log('item AFTER: ', callback(item));
// console.log("---")
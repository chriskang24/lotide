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


/*function without(source, itemsToRemove) {

  let newSource = source.slice();

  // console.log(newSource);

  for (let i = 0; i < source.length; i++) {

    // console.log(newSource);

    if (itemsToRemove.includes(source[i])) {

      newSource.splice(i, 1);
    }

  }

  return newSource;
};*/

function without (source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove));

  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {

    // console.log(newArray)

    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);

      console.log(newArray)
    }

  }
  return newArray;
};

without([1, 2, 3, 3, 3, 3, 4, 5], [1, 3, 4])


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

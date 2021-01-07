
function assertEqual(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



function findKeyByValue(valueProvided, keyValue) {

  // Consider using the Object.keys function to help you easily search through all the object keys.

  // Consider using for...of to loop over the keys returned by Object.keys.

  for (let value in valueProvided) {
    
    let key = value

    if (valueProvided[key] === keyValue) {

      return key;
    }
  }
};

bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")
// console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"))
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
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

function eqObjects(object1, object2) {

  let keyOne = Object.keys(object1);
  let keyTwo = Object.keys(object2);


  if (keyOne.length !== keyTwo.length) {
    return false;
  }

  for (let keyObj1 in object1) {
    for (let keyObj2 in object2) {
      if (keyObj1 === keyObj2) {

        if (Array.isArray(object1[keyObj1])) {
          if (Array.isArray(object2[keyObj2])) {

            console.log(object1[keyObj1], object2[keyObj2])
            if (!eqArrays(object1[keyObj1], object2[keyObj2])) {
              return false;
            }
          }
        } else {
          if (object1[keyObj1] !== object2[keyObj2]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
  console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
}
};


const dc = { d: ["2", 3], c: "1" };
const cd = { c: "1", d: ["2", 3] };

console.log(assertObjectsEqual(cd, dc));
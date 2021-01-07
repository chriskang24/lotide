
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



const abc = { a: "1", b: "2", c: "3" };
const def = { d: "1", e: "2", f: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(cd, dc), true)

// console.log(eqObjects(cd, dc));

// console.log(assertEqual(eqObjects(cd, cd2)))
// console.log(eqObjects(abc, def));

assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {

  let newArray = array;

  return newArray.slice(1);

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[1], "Fire");

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${actual}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${actual}`);
    }
  };
  const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
      newArray[i] = array[i];
      console.log(newArray)
    }
    return newArray;
  };
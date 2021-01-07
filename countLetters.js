const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


function countLetters(string) {

  let moddedString = string.split("");
  let countList = {};

  for (let character of moddedString) {
    if (character !== " ") {
      if (countList[character]) {
        countList[character] += 1;
      } else {
        countList[character] = 1;
      }
    }
  }

  return countList;
};


console.log(countLetters("lighthouse in the house"));
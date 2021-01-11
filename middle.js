// const assertArraysEqual = require('./assertArraysEqual');


function middle(givenArray) {

  let middleArray = [];

  if (givenArray.length <= 2 && givenArray.length > 0) {

    return middleArray;

  } else if (givenArray.length % 2 === 1) {

    return middleArray = givenArray[Math.floor(givenArray.length / 2)];

  } else if (givenArray.length % 2 === 0) {

    return middleArray = [givenArray[Math.floor((givenArray.length - 1) / 2)], givenArray[Math.floor(givenArray.length / 2)]]
  }
};


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [ 3, 4 ]);

module.exports = middle;


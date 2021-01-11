const assertEqual = require('./assertEqual');

const tail = function(array) {

  let newArray = array;

  return newArray.slice(1);

};

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);


// FUNCTION IMPLEMENTATION
  // const tail = function(array) {
  // let newArray = [];
  // for (let i = 1; i < array.length; i++) {
  //     newArray[i] = array[i];
  //     console.log(newArray)
  //   }
  //   return newArray;
  // };


module.exports = tail;
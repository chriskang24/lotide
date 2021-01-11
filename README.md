# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chriskang24/lotide`

**Require it:**

`const _ = require('@chriskang24/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array) : Returns an array with only the first index position of the original array.
* tail(array) : Removes the first element of an array and returns a new array with the rest of the elements while leaving the original array unmodified.
* middle(array) : Returns the middle element of an array. If the array has an even number of elements, it will return the two middle elements instead. If the array has 2 or less elements, it will return an empty array.
* assertArraysEqual(array1, array2) : Test the result of a function and compare it to the expected value using arrays => implements this using eqArray
* assertEqual(actual, expected) : Test the result of a function and compare it to the expected value given. 
* eqArrays(array1, array2) : Compare two arrays to see if they are exactly identical. Compares the element positions and lengths of the arrays as well.

* countLetters(word) : Provide a word or a sentence and it will count the number of each unique letter in a word (ex Hello: # of l's in Hello = 2)
* countOnly(all Items, itemsToCount) : Provide an array and it will count only the items you would like to count. (itemsToCount).
* eqObjects(object1, object2): Compare two objects to see if they are an exact match. Compares the key values, and object length.
* findKey(object, callback) : Provide the value of an object key through a function, and it will return the first object key that will fit the function. 
* findKeyByValue(object, keyValue) : Provide the value of an object key, and it will return the object key. If no such key exists, an object will not be returned.
* letterPosition(sentence) : Provide a string, and it will return an object with all the index positions that the letters appear in the sentence. (Example: "Hello" {H: [0], e: [1], l: [2, 3], o: [4]})
* map(array, callback) : From a provided array, this will create a new array that is modified from a given callback function.
* takeUntil(array, callback) : Returns a slice of an array, starting from the beginning up until the callback point provided.
* without(originalArray, removeFromArray) : Allows you to filter through array by removing a certain element from the original array provided.
* assertObjectsEqual(actual, expected) : Test two objects to verify if all the contents of each object match each other => implements this using eqObjects function.
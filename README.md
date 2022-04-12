# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @charlesvngo/lotide`

**Require it:**

`const _ = require('@charlesvngo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: A function that takes a sentence and returns a count for how often that letter appears in the sentence
* `countOnly`: A Function will accept an array and an object and return an object that counts how many instances of the object the array has.
* `eArrays`: A function will take in two arrays and compare both values at the same index and return true if they all match. 
* `eqObjects`: A function which takes in two objects and returns true if both objects have identical key-value pairs
* `findKey`: A function that takes an object and a callback. Will scan the object and return the first key when the callback is truthy. If no key found, return undefined
* `head`: Will return the first item when passed an array.
* `findKeyByValue`: A Function that takes in an object and a value, and returns the first key that contains that value.
* `flatten`: A function to flatten embedded arrays into a single array
* `letterPositions`: A function that takes in a sentence and outputs and object indicating where those letters appear based on their indices
* `map`: A function to perform mapping on all array elements.
* `middle`: A function that will return the middle item of an array. If there are multiple middle items, it will return both.
* `takeUntil`: A function  that will take an array and return every item until a condition is fulfilled.
* `tail`: A function that will return every item except the first when passed an array.
* `without`: A function that removes specified items in an array and returns the result as a new array.

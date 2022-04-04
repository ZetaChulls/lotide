// Function implementation

const assertEqual = function(actual, expected) {
  if(actual === expected) {
    console.log("Assertion Passed: [" + actual + "] === [" + expected + "]" );
  } else {
    console.log("Assertion Failed: [" + actual + "] !== [" + expected + "]");
  }

};

// Test code
assertEqual("Lighthouse Labs", "Bootcamp")
assertEqual(1, 1);
assertEqual("Donuts", "Donuts");
assertEqual("Bagels", "bagels");
assertEqual(1, 2);
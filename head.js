// Helper function to check results.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

// Function that takes an array and returns the first item in the array.

const head = function(array) {
  return array[0];
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Bagels', 'Donuts', 'Coffee']), 'Donuts');
assertEqual(head(['Donuts']), 'Donuts');
assertEqual(head([]), undefined);

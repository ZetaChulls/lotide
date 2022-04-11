// Importing function to test.
const assertEqual = require('../assertEqual');
const head = require('../head');


// Test code to confirm head is working.
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Bagels', 'Donuts', 'Coffee']), 'Donuts');
assertEqual(head(['Donuts']), 'Donuts');
assertEqual(head([]), undefined);

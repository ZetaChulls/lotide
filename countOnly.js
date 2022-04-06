// Function to check if two values are equal.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Function will accept an array and an object and return an object that counts how many instances of the object the array has

const countOnly = function(allItems, itemsToCount) {
  // check to see if valid arguement types are used in the function first.
  if ( !Array.isArray(allItems) || !itemsToCount instanceof Object) return "Error, check arguement types in countOnly";

  let countedItems = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (countedItems[item]) {
        countedItems[item]++;
      } else {
        countedItems[item] = 1;
      }
    }
  }
  console.log(countedItems);
  return countedItems;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

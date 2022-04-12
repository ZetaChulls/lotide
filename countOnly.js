
// Function will accept an array and an object and return an object that counts how many instances of the object the array has

const countOnly = function(allItems, itemsToCount) {
  // check to see if valid arguement types are used in the function first.
  if (!Array.isArray(allItems) || !(itemsToCount instanceof Object)) return "Error, check arguement types in countOnly";

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
  return countedItems;
};


module.exports = countOnly;
// Function that removes specified items in an array and returns the result as a new array.
// function will accept 2 arguments, an array, and any items to be removed
const without = function(source, itemsToRemove) {
  return source.filter((element) => !itemsToRemove.includes(element));
};

module.exports = without;
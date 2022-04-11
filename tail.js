// Function that takes an array and returns everything but the first item in the array.

const tail = function(array) {
  if (array.length <= 1) return [];
  return array.slice(1);
};

module.exports = tail;
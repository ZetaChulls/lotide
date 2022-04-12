// Function to flatten embedded arrays into a single array
// Takes an array as an arguement and will return an array with no arrays as elements

const flatten = function(array) {
  let output = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      item.forEach((element => output.push(element)));
    } else {
      output.push(item);
    }
  }
  return output;
};

module.exports = flatten;
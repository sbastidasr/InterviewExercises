// Implement a function to flatten arrays

function flatten(array) {
  let ret = [];
  for(let i = 0; i < array.length; i++) {
    if(!Array.isArray(array[i])) {
      ret.push(array[i]);
    } else {
      ret = ret.concat(flatten(array[i]));
    }
  }
  return ret;
}

module.exports = flatten;

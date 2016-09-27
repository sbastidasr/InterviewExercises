// You might know about map method, let's implement your own map one.

function map(array, callback, context) {
  let result = new Array(array.length);
  for (var i = 0; i < array.length; i++) {
    result[i] = callback.call(context, array[i], i, array);
  }
  return result;
}

module.exports = map;

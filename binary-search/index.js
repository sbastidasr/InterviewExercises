// Implement your own binarySearch

function binarySearch(array, value){
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start+ end)/2);

  do{
    if (value < array[mid]){
      end = mid - 1;
    } else if (value > array[mid]){
      start = mid + 1;
    }
    mid = Math.floor((start + end)/2);
  } while(start < end && array[mid] != value);

  return (array[mid] === value)? mid : -1;
}

module.exports = binarySearch;

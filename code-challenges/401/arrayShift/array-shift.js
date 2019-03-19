'use strict';

module.exports = exports = (arr, val) => {
  // validates input for nothing passed in, only one parameter passed in, or the first parameter passed in not being an array - returns null
  if (!arr || !val || !Array.isArray(arr)) return null;

  let newArr = [];
  newArr.length = arr.length + 1;

  const midPoint = Math.ceil(arr.length / 2); // rounds up for odd numbered array lengths

  // fills the first half of the new array
  for (let i = 0; i < midPoint; i++) {
    newArr[i] = arr[i];
  }
  // assigns value passed in to the midpoint of the new array
  newArr[midPoint] = val;
  // fills the second half of the new array
  for (let i = midPoint + 1; i < newArr.length; i++) {
    newArr[i] = arr[i - 1];
  }
  
  return newArr;
};
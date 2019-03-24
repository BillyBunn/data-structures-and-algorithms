'use strict';

module.exports = exports = (sortedArray, searchKey, firstIndex = 0, lastIndex = sortedArray.length - 1) => {
  
  const midpointIndex =  Math.ceil((firstIndex + lastIndex) / 2);
  const midpoint = sortedArray[midpointIndex];

  // If the search key is equal to the sorted array's midpoint, return the index of the midpoint
  if (searchKey === midpoint) return `The index of ${midpoint} is ${midpointIndex}`;

  // If the search key is less than the first item in the sorted array OR if it's greater than the last item in the sorted array, return -1
  if (searchKey < sortedArray[firstIndex] || searchKey > sortedArray[lastIndex]) return 'negative one';

  // Else, call this BinarySearch function again with one half of the sorted array and the same search key
  // If the search key is LESS than the sorted array's midpoint, use the first half of the sorted array
  if (searchKey < midpoint) {
    lastIndex = midpointIndex;
    return BinarySearch(sortedArray, searchKey, firstIndex, lastIndex);
  }

  // If the search key is GREATER than the sorted array's midpoint, use the second half of the sorted array
  if (searchKey > midpoint) {
    firstIndex = midpointIndex;
    return BinarySearch(sortedArray, searchKey, firstIndex, lastIndex);
  }
};


function BinarySearch(sortedArray, searchKey, firstIndex = 0, lastIndex = sortedArray.length - 1) {

  // const firstIndex; //?
  // const lastIndex; //?
  // console.log('first',firstIndex);
  // console.log('last',lastIndex);

  if(lastIndex === 0) return 'last idx is 0';
  if (firstIndex > lastIndex) return 'couldnt find it';

  const midpointIndex =  Math.ceil((firstIndex + lastIndex) / 2);
  const midpoint = sortedArray[midpointIndex];
  // console.log('mid',midpointIndex,'midIDX',midpoint);


  // If the search key is equal to the sorted array's midpoint, return the index of the midpoint
  if (searchKey === midpoint) return `The index of ${midpoint} is ${midpointIndex}`;
  if (firstIndex > lastIndex) return 'couldnt find it';

  // If the search key is less than the first item in the sorted array OR if it's greater than the last item in the sorted array, return -1
  if (searchKey < sortedArray[firstIndex] || searchKey > sortedArray[lastIndex]) return 'negative one';

  // Else, call this BinarySearch function again with one half of the sorted array and the same search key
  // If the search key is LESS than the sorted array's midpoint, use the first half of the sorted array
  if (searchKey < midpoint) {
    lastIndex = midpointIndex;
    return BinarySearch(sortedArray, searchKey, firstIndex, lastIndex);
  }

  // If the search key is GREATER than the sorted array's midpoint, use the second half of the sorted array
  if (searchKey > midpoint) {
    firstIndex = midpointIndex;
    return BinarySearch(sortedArray, searchKey, firstIndex, lastIndex);
  }
}
// let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
// let key = 17;

// BinarySearch(someArray, key); //?

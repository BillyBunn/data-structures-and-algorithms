'use strict';

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    // Partition the algorithm
    let position = partition(arr, left, right);
    // Sort the left
    quickSort(arr, left, position - 1);
    // Sort the right
    quickSort(arr, position + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  // Set a pivot
  let pivot = arr[right];
  // Get the index of the lower value
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};


let nums = [3, 6, 5, 7, 2, 9, 1, 8];

quickSort(nums); //?

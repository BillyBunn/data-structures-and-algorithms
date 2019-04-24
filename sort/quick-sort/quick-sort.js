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
  console.log(`SORTED ARRAY: ${arr}`);
  return arr;
};

const partition = (arr, left, right) => {
  // Set a pivot
  let pivot = arr[right];
  // Get the index of the lower value
  let low = left - 1;
  console.log(`
-------------------- START OF partition() --------------------
ARRAY: ${arr} -- PIVOT: ${pivot}
PARTITION: ${arr.slice(0, right)}`);

  for (let i = left; i < right; i++) {
    console.log(`
${arr.slice(0, right)}
          LOW: ${arr[low]}
          i: ${arr[i]}
          Is ${arr[i]} <= ${pivot}? ${arr[i] <= pivot}`);
    if (arr[i] <= pivot) {
      console.log(`          SWAP low & i`);
      low++;
      swap(arr, i, low);
    }
  }
  console.log(`
DONE, the pivot goes in front of ${arr[low]}, the low.`);
  swap(arr, right, low + 1);
  console.log(`
${pivot} is in the right place.
PARTITION: ${arr.slice(0, right)}
-------------------- END OF partition() --------------------`);
  return low + 1;
};

const swap = (arr, i, low) => {
  console.log(`          ${arr[low]} <--SWAP--> ${arr[i]}`);

  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};


// let nums = [3, 6, 5, 7, 2, 9, 1, 8];
let nums = [7, 2, 1, 8, 6, 3, 5, 4];


quickSort(nums);

'use strict';

const mergeSort = (arr) => {

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
};

const merge = (left, right, arr) => {
  let i = 0, j = 0, k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length) {
    // add remaining of right to arr
    for (let i = 0; i < right.length; i++) {
      arr[k] = right[i];
      k++;
    }
  } else {
    // add remaining of left to arr
    for (let i = 0; i < left.length; i++) {
      arr[k] = left[i];
      k++;
    }
  }
  return arr;
};

// const nums = [5, 4, 3, 2, 1, 6, 9, 8, 7];
const nums = [9,7,8,3,2];

mergeSort(nums); //?

let lef = merge([9], [7], [9,7]); //?
let rig = merge([8], [2,3], [8,3,2]); //?

merge(lef, rig, nums); //?
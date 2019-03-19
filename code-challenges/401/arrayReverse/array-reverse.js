'use strict';

module.exports = exports = (arr) => {
  if (!Array.isArray(arr)) return null;
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};
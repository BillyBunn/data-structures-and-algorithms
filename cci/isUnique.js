'use strict';

// Solution with no additional data structures
function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false;
    }
  }
  return true;
}
console.log(isUnique('abcbe'));
console.log(isUnique('abcdefg'));

// Solution using a hash set
function isUniqueWithSet(string) {
  const set = new Set();
  for (let i = 0; i < string.length; i++) {
    if (set.has(string[i])) {
      return false;
    } else {
      set.add(string[i]);
    }
  }
  return true;
}
console.log(isUniqueWithSet('abcbe'));
console.log(isUniqueWithSet('abcdefg'));
'use strict';

const Hashtable = require('../../../hashtable/hashtable.js');

const repeatedWord = (str) => {
  if (typeof str !== 'string' || (str instanceof String)) return 'input must be string';

  // sanitizes input, puts into array
  const arr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').split(' ');
  const ht = new Hashtable(1024);

  for (let i = 0; i < arr.length; i++) {
    // if the hashtable contains the word already, return that word
    if (ht.contains(arr[i])) {
      return arr[i];
    }
    // otherwise, add the word to the hashtable
    else {
      ht.add(arr[i]);
    }
  }
  // if no words repeated
  return null;
};

module.exports = repeatedWord;

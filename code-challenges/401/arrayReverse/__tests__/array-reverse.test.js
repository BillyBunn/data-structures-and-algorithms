'use strict';

const reverseArray = require('../array-reverse');

describe('array-reverse.js', () => {
  it('returns an empty array if called with an empty array', () => {
    expect(reverseArray([])).toEqual([]);
  });
  it('returns null if called with anything other than an array', () => {
    expect(reverseArray('not an array')).toBe(null);
  });
  it('reverses an array of data', () => {
    expect(reverseArray([1,2,3,4,5])).toEqual([5,4,3,2,1]);
  });
});

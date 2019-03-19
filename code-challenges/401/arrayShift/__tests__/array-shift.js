'use strict';

const insertShiftArray = require('../array-shift');

describe('array-shift.js', () => {
  it('returns null if no arguments passed in', () => {
    expect(insertShiftArray()).toBeNull();
  });
  it('returns null if only one argument passed in', () => {
    expect(insertShiftArray([1,2,3])).toBeNull();
  });
  it('returns null if the first argument isn\'t an array', () => {
    expect(insertShiftArray('string', 'value')).toBeNull();
  });

  it('returns truthy if invoked with an array and anything else', () => {
    expect(insertShiftArray([1,2,3], 'value')).toBeTruthy();
  });
  it('returns an array a length 1 greater than the input array', () => {
    expect(insertShiftArray([1,2,3,4], 'value').length).toBe(5);
  });
  it('returns an array with the new value added at the middle index for even-lengthed arrays.', () => {
    expect(insertShiftArray([1,2,3,4], 'value')).toEqual([1,2,'value',3,4]);
  });
  it('returns an array with the new value added at the middle index for odd-lengthed arrays.', () => {
    expect(insertShiftArray([1,2,3,4,5], 'value')).toEqual([1,2,3,'value',4,5]);
  });


});

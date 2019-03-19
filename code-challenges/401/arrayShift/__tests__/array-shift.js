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

  it('returns an array if invoked with an array and anything else', () => {
    expect(insertShiftArray([1,2,3], 'value')).toBeTruthy();
  });
  

});

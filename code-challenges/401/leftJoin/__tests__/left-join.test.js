'use strict';

const { leftJoinMaps, leftJoinObjs } = require('../left-join.js');

describe('left-join.js', () => {
  it('can join two maps', () => {
    let mapA = new Map([
      ['big', 'large'],
      ['hot', 'warm'],
      ['small', 'tiny'],
    ]);
    let mapB = new Map([
      ['big', 'small'],
      ['short', 'tall'],
      ['hot', 'cold'],
    ]);

    expect(leftJoinMaps(mapA, mapB)).toEqual([
      ['big', 'large', 'small'],
      ['hot', 'warm', 'cold'],
      ['small', 'tiny', null],
    ]);
  });

  it('returns an array of ALL keys from the LEFT', () => {
    let mapA = new Map([
      ['big', 'large'],
      ['hot', 'warm'],
      ['small', 'tiny'],
    ]);
    let mapB = new Map([
      ['something', 'nothing'],
      ['cats', 'dogs'],
    ]);
    expect(leftJoinMaps(mapA, mapB).length).toBe(3);
  });

  it(' if key exists only in left map, appends null to output arrays', () =>{
    let mapA = new Map([
      ['big', 'large'],
      ['hot', 'warm'],
      ['small', 'tiny'],
    ]);
    let mapB = new Map([
      ['something', 'nothing'],
      ['cats', 'dogs'],
    ]);
    expect(leftJoinMaps(mapA, mapB)).toEqual([
      ['big', 'large', null],
      ['hot', 'warm', null],
      ['small', 'tiny', null],
    ]);
  });

});

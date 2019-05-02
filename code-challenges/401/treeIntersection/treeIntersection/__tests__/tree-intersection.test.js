'use strict';

const { treeIntersection, Node } = require('../tree-intersection.js');

describe('tree-intersection.js', () => {
  const treeA = new Node(1);
  treeA.left = new Node(4);
  treeA.left.left = new Node(7);
  treeA.left.right = new Node(10);
  treeA.right = new Node(6);
  treeA.right.right = new Node(70);


  const treeB = new Node(14);
  treeB.left = new Node(45);
  treeB.left.left = new Node(1);
  treeB.left.right = new Node(97);
  treeB.right = new Node(68);
  treeB.right.right = new Node(70);



  it('throws if called with invalid input—without 2 binary trees', () => {
    expect(treeIntersection('foo', { bar: 'baz' })).toBe('both inputs must be binary trees');
  });

  it('returns an arry of all (in order) node values if called with identical trees', () => {
    expect(treeIntersection(treeA, treeA)).toEqual([7, 4, 10, 1, 6, 70]);
  });

  it('returns an array of matching values from the trees', () => {
    expect(treeIntersection(treeA, treeB)).toEqual([1, 70]);
  });

});

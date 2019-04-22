'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree.js');

const Node = require('../../../../tree/tree.js').Node;
const BinaryTree = require('../../../../tree/tree.js').BinaryTree;

let tree = new BinaryTree(10);

let thirteen = new Node(13);
let fifteen = new Node(15);
let six = new Node(6);
let eight = new Node(8);

tree.root.leftChild = thirteen;
tree.root.leftChild.leftChild = fifteen;
tree.root.leftChild.rightChild = six;
tree.root.rightChild = eight;

tree.preOrder(); //?
fizzBuzzTree(tree);
tree.preOrder(); //?

/*
“Happy Path” - Expected outcome
Expected failure
Edge Case (if applicable/obvious)
*/

describe('FizzBuzzTree', () => {

  it('throws an error if called without a tree', () => {
    expect(true).toBeTruthy();
  });

  it('throws an error if a non-integer value is found in the tree', () => {
    expect(true).toBeTruthy();
  });

  it('replaces numbers divisible by 3 with "Fizz"', () => {
    expect(true).toBeTruthy();
  });

  it('replaces numbers divisible by 5 with "Buzz"', () => {
    expect(true).toBeTruthy();
  });

  it('replaces numbers divisible by 3 AND 5 with "FizzBuzz"', () => {
    expect(true).toBeTruthy();
  });

  it('replaces "FizzBuzz", "Fizz", or "Buzz" as expected', () => {
    expect(true).toBeTruthy();
  });

  it('returns an unmodified tree if no values are divisible by 3 or 5', () => {
    expect(true).toBeTruthy();
  });

});
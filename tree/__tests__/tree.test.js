'use strict';

const Node = require('../tree.js').Node;
const BinaryTree = require('../tree.js').BinaryTree;
const BinarySearchTree = require('../tree.js').BinarySearchTree;

const tree = new BinaryTree('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');
tree.root.leftChild = b;
tree.root.rightChild = c;
tree.root.leftChild.leftChild = d;
tree.root.leftChild.rightChild = e;
tree.root.rightChild.leftChild = f;



describe('binary trees', () => {
  it('can perform a preOrder traversal', () => {
    expect(tree.preOrder()).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('can perform an inOrder traversal', () => {
    expect(tree.inOrder()).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
  });

  it('can perform a postOrder traversal', () => {
    expect(tree.postOrder()).toEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
  });
});

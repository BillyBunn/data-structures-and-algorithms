'use strict';

const Node = require('../../../tree/tree.js').Node;
const BinaryTree = require('../../../tree/tree.js').BinaryTree;

let tree = new BinaryTree(10);

let thirteen = new Node(13);
let fifteen = new Node(15);
let six = new Node(6);
let eight = new Node(8);

tree.root.leftChild = thirteen;
tree.root.leftChild.leftChild = fifteen;
tree.root.leftChild.rightChild = six;
tree.root.rightChild = eight;

// tree.root.rightChild.rightChild = new Node('bro');
// tree.root.leftChild.leftChild.leftChild = new Node('dude');


tree.inOrder(); //?

let badTree = new BinaryTree(1);
badTree.root.leftChild = new Node(5);
badTree.root.rightChild = new Node('hello');

function fizzBuzzTree(tree) {
  const traverseChange = (node) => {
    if (typeof node.value !== 'number') throw `Tree must contain integer values only; value "${node.value}" is not a number`;

    if (node.leftChild) traverseChange(node.leftChild);

    if (node.value % 15 === 0) node.value = 'FizzBuzz';
    if (node.value % 5 === 0) node.value = 'Buzz';
    if (node.value % 3 === 0) node.value = 'Fizz';

    if (node.rightChild) traverseChange(node.rightChild);
  };

  try {
    if (!tree) throw `Must be called with a binary tree of integers.`;
    traverseChange(tree.root);
    return tree;
  }
  catch(err) {
    return 'ERROR: ' + err;
  }

}
fizzBuzzTree(tree).inOrder(); //?

// fizzBuzzTree(); //? 
// fizzBuzzTree(badTree); //?
// fizzBuzzTree(badTree).inOrder(); //?

module.exports = fizzBuzzTree;

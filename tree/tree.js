'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    // returns an array of the values, ordered appropriately

  }

  inOrder() {
    // returns an array of the values, ordered appropriately

  }

  postOrder() {
    // returns an array of the values, ordered appropriately

  }
}

class BinarySearchTree extends BinaryTree {
  add(value) {
    // accepts a value, and adds a new node with that value in the correct location in the binary search tree
  }

  contains(value) {
    // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once
  }
}

let root = new Node(1);

let tree = new BinaryTree(root);

tree;

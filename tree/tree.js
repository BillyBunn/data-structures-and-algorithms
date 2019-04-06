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

  preOrder(node = this.root, values = []) {
    // INPUT <-- root Node
    // OUTPUT <-- preorder output of tree nodes

    values.push(node.value);

    if (node.leftChild) this.preOrder(node.leftChild, values);

    if (node.rightChild) this.preOrder(node.rightChild, values);

    return values;
  }

  inOrder(node = this.root, values = []) {
    // INPUT <-- root Node
    // OUTPUT <-- inorder output of tree nodes

    if (node.leftChild) this.inOrder(node.leftChild, values);

    values.push(node.value);

    if (node.rightChild) this.inOrder(node.rightChild, values);

    return values;
  }

  postOrder(node = this.root, values = []) {
    // INPUT <-- root Node
    // OUTPUT <-- postorder output of tree nodes

    if (node.leftChild) this.postOrder(node.leftChild, values);

    if (node.rightChild) this.postOrder(node.rightChild, values);

    values.push(node.value);

    return values;
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

let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');

let tree = new BinaryTree(a);

tree;

tree.root.leftChild = b;
tree.root.rightChild = c;
tree.root.leftChild.leftChild = d;
tree.root.leftChild.rightChild = e;
tree.root.rightChild.leftChild = f;

tree.preOrder(); //?
tree.inOrder(); //?
tree.postOrder(); //?

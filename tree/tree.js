'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new Node(value);
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

  add(value, root = this.root) {
    if (root.value < value) {
      !root.rightChild ?
        root.rightChild = new Node(value) :
        this.add(value, root.rightChild);
    } else {
      !root.leftChild ?
        root.leftChild = new Node(value) :
        this.add(value, root.leftChild);
    }
  }

  // accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once
  contains(value, root = this.root) {
    if (value === undefined) return null;
    /*
    // recursive method
    if (!root) return false;
    if (root.value === value) return true;
    if (root.value > value) return this.contains(value, root.leftChild);
    if (root.value < value) return this.contains(value, root.rightChild);
    */

    // non-recursive method
    while (root.value !== value) {
      value < root.value ?
        root = root.leftChild :
        root = root.rightChild;
      if (!root) return false;
    }
    return true;
  }

}

let binarySearchTree = new BinarySearchTree(10);
binarySearchTree.add(3);
binarySearchTree.add(15);

binarySearchTree.inOrder(); //?
binarySearchTree.preOrder(); //?

binarySearchTree.contains(10); //?
binarySearchTree.contains(3); //?
binarySearchTree.contains(15); //?

binarySearchTree.contains(5); //?
binarySearchTree.contains(50); //?
binarySearchTree.contains(); //?
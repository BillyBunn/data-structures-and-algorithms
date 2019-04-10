'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

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

  breadthFirst(root = this.root) {
    let queue = new Queue();
    let valueArray = [];
    queue.enqueue(root);
    while(queue.peek()) {
      if (queue.front.value.leftChild) queue.enqueue(queue.front.value.leftChild);
      if (queue.front.value.rightChild) queue.enqueue(queue.front.value.rightChild);
      // queue.dequeue() returns front queue node, queue node value = tree node
      valueArray.push(queue.dequeue().value.value);
    }
    return valueArray;
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

let tree = new BinaryTree(1);
tree.root.leftChild = new Node(2);
tree.root.leftChild.leftChild = new Node(4);
tree.root.leftChild.rightChild = new Node(5);


tree.root.rightChild = new Node(3);
tree.root.rightChild.rightChild = new Node(6);
tree.root.rightChild.rightChild.leftChild = new Node(7);



tree.breadthFirst(); //?

tree.inOrder(); //?

module.exports = {Node, BinaryTree, BinarySearchTree};
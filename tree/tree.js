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
    // depth-first recursive method
    // if (!root) return false;
    // if (root.value === value) return true;
    // if (root.value > value) return this.contains(value, root.leftChild);
    // if (root.value < value) return this.contains(value, root.rightChild);

    // breadth-first queue method
    let current = root;
    while (current.value !== value) {
      value < current.value ?
        current = current.leftChild :
        current = current.rightChild;
      if (!current) return false;
    }
    return true;
  }

}

// let a = new Node('A');
// let b = new Node('B');
// let c = new Node('C');
// let d = new Node('D');
// let e = new Node('E');
// let f = new Node('F');

// let tree = new BinaryTree(a);

// tree;

// tree.root.leftChild = b;
// tree.root.rightChild = c;
// tree.root.leftChild.leftChild = d;
// tree.root.leftChild.rightChild = e;
// tree.root.rightChild.leftChild = f;

// tree.preOrder(); //?
// tree.inOrder(); //?
// tree.postOrder(); //?



// let a = new Node(100);
// let b = new Node(50);
// let c = new Node(200);
// let d = new Node(25);
// let e = new Node(75);
// let f = new Node(150);

// let g = new Node(300);
// let h = new Node(60);
// let i = new Node(90);
// let j = new Node(342);



// let binarySearchTree = new BinarySearchTree(a);
// binarySearchTree.root.leftChild = b;
// binarySearchTree.root.rightChild = c;
// binarySearchTree.root.leftChild.leftChild = d;
// binarySearchTree.root.leftChild.rightChild = e;
// binarySearchTree.root.rightChild.leftChild = f;

// binarySearchTree.add(300); //?




// for (let i = 10; i <= 20; i += 10) {
//   binarySearchTree.add(i);
//   i;
//   binarySearchTree.add(-i);
//   -i; //?


//   binarySearchTree.add(i - 5);
//   i - 5; //?
//   binarySearchTree.add(-i + 5);
//   -i + 5; //?

// }
// binarySearchTree.preOrder(); //?

// binarySearchTree.add(-1);

let binarySearchTree = new BinarySearchTree(10);
binarySearchTree.add(3);
binarySearchTree.add(15);
// binarySearchTree.add(50);


binarySearchTree;

binarySearchTree.inOrder(); //?
binarySearchTree.preOrder(); //?

binarySearchTree.root.value; //?
// binarySearchTree.contains(0); //?


binarySearchTree.contains(3); //?
binarySearchTree.contains(3); //?
binarySearchTree.contains(15); //?

binarySearchTree.contains(5); //?
binarySearchTree.contains(50); //?
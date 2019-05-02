'use strict';

const Hashtable = require('../../../../hashtable/hashtable.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const treeIntersection = (tree1, tree2) => {
  if (!(tree1 instanceof Node) || !(tree2 instanceof Node)) return 'both inputs must be binary trees';

  let output = [];
  const ht = new Hashtable(1024);

  (function add(node) {
    if (node.left) add(node.left);
    ht.add(node.value);
    if (node.right) add(node.right);
  })(tree1);

  (function check(node) {
    if (node.left) check(node.left);
    if (ht.contains(node.value)) output.push(node.value);
    if (node.right) check(node.right);
  })(tree2);

  return output;
};

const treeA = new Node(1);
treeA.left = new Node(4);
treeA.left.left = new Node(7);
treeA.left.right = new Node(10);
treeA.right = new Node(6);
treeA.right.right = new Node(70);

treeIntersection(treeA, treeA); //?




module.exports = { treeIntersection, Node };

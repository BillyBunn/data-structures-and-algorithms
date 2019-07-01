'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  append(value) {
    let newNode = new Node(value);
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    let values = [];
    let current = this;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
  }
}

function listOfDepths(root) {
  let lists = [];

  function traverse(node, level = 1) {
    if (node != null) {
      if (!lists[level - 1]) {
        let linkedListNode = new Node(node.value);
        lists[level-1] = linkedListNode;
      } else {
        lists[level - 1].append(node.value);
      }

      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    }
  }

  traverse(root);

  return lists;
}


let tree = new TreeNode(1);

tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.left.right.left = new TreeNode(7);

tree.right.left = new TreeNode(6);

listOfDepths(tree).forEach(node => node.print());
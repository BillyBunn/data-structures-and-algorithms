function printTree(root) {
  let output = [];

  function traverse(node, level = 0) {
    if (node.left) traverse(node.left, level++);

    if (!output[level]) {
      output[level] = [node.value];
    } else {
      output[level] = [...output[level], node.value];
    }

    if (node.right) traverse(node.right, level++);
  }

  return output;
}





class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function print(node) {
  let output = [];
  (function traverse(node) {
    if (node.left) traverse(node.left);
    output.push(node.value);
    if (node.right) traverse(node.right);
  })(node);

  console.log(output);
}


let tree = new Node(1);
tree.left = new Node(2);

print(tree);


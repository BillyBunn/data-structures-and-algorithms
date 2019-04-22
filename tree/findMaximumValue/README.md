# Find the Maximum Value in a Binary Tree
This challenge entailed adding a method to a `BinaryTree` class created in a previous code challenge. The method that was added is below:
```
findMaximumValue(node = this.root, max = this.root.value) {
    if (node.leftChild) {
      node.leftChild.value > node.value ?
        this.findMaximumValue(node.leftChild, node.leftChild.value) :
        this.findMaximumValue(node.leftChild, max);
    }
    if (node.rightChild) {
      node.rightChild.value > node.value ?
        this.findMaximumValue(node.rightChild, node.rightChild.value) :
        this.findMaximumValue(node.rightChild, max);
    }
    return max;
  }
```
## Challenge
_“Write a function called `find-maximum-value` which takes binary tree as its only input. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.”_

## Approach & Efficiency


### The Big O
#### Time
The time efficiency of this algorithm is dependent on the size of the tree: `O(n)`.
#### Space
The space efficiency is dependent on the depth of the tree, as we are traversing the tree recursively and the callstack gets as large as the tree's height: `O(h)`.


## Solution
_Completed in collaboration with classmate Jason Burns_
![Find Max Value whiteboard](https://i.imgur.com/Fj0f33A.jpg))

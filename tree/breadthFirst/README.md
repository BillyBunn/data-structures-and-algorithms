# Breadth-first
This challenge entailed adding a method to a `BinaryTree` class created in a previous code challenge. The method that was added is below:
```
breadthFirst(root = this.root) {
    let queue = new Queue();
    let valueArray = [];
    queue.enqueue(root);
    while(queue.peek()) {
      if (queue.front.value.leftChild) queue.enqueue(queue.front.value.leftChild);
      if (queue.front.value.rightChild) queue.enqueue(queue.front.value.rightChild);
      valueArray.push(queue.dequeue().value.value);
    }
    return valueArray;
  }
```
## Challenge
_“Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.”_

## Approach & Efficiency
My partner (Jason Burns) and I read the problem and its example outputs carefully. We understood it was asking us to print each node value in the tree individually, but thought it made more sense to return an array of the values in the tree, as we did with all the depth-first traversals. We understand this will make our space efficiency dependent on the number of nodes in the tree (rather than just the _width_ of the tree), but it made the method much more useful in our minds.

As we visualized the problem domain, we realized we wanted to somehow split our tree into "rows" and have each row added to some output sequentially. We wanted our algorithm to traverse node-by-node in each row. We realized we needed the first node _in_ each row to be the first row _out_ to be returned. We decided to use a **queue** to implement this FIFO behavior. 

Our algorithm first creates a queue with the root node in the binary tree and declares an empty output array. It then uses a loop to fill a queue with each row of the tree. At each row, it adds (enqueues) any direct children of the front node to the back of the queue, then removes (dequeues) the front node and adds its value to our output array. The loop continues _while_ there are still nodes in the queue.

### The Big O
#### Time
The time efficiency of this algorithm is dependent on the size of the tree: `O(n)`.
#### Space
The space efficiency is also dependent on the size of the tree, as we are building an array filled with the values of _every_ node in the tree: `O(n)`.

If we had simply printed each node's value as we dequeued, we would not have an array of every value. The space efficiency would be dependent on the size of our queue. The most space this queue takes up is dependent on the _width_ of the tree (the biggest row). In that case, the space efficiency would be `O(w)`, where `w` is the width of the binary tree.

## Solution
_Completed in collaboration with classmate Jason Burns_
![Breadth-first traversal whiteboard](https://i.imgur.com/h5btT6q.jpg)

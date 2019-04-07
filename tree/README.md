# Trees
This code challenge explores **binary trees** and **binary search trees**. 

I completed the challenge described below and explain my solutions in the [Approach & Efficiency](#approach--efficiency) section.

## Challenge
* Create a `Node` class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a `BinaryTree` class
  * Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.

* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

* Create a `BinarySearchTree` class
  * Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  * Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
### Node
The `Node` class I created constructs instances with a `value` passed in. It has three properties: `value`, `leftChild`, and `rightChild`. 

`value` is equal to whatever is passed in each constructed instance,`leftChild` and `rightChild` are equal to `null`.

### BinaryTree
My `BinaryTree` class constructs a new instance with a `value` passed in, and sets its `root` property equal to a new `Node` made with that `value`.


The `preOrder`, `inOrder`, and `postOrder` methods on the class traverse the tree recursively and return an array of all the values in the tree.
* The code for each of these methods follows the same basic pattern, but _when_ the "current" `node` is pushed is different for each case. 
* I leveraged ES6's [default parameter values](http://es6-features.org/#DefaultParameterValues) to pass the returned array of values into the method. This allows it to accumulate at each recursive pass through the function.
* The time and space efficiency for these recursive approaches is `O(n)`, as the call-stack adds up when the function is called within itself.

### BinarySearchTree
My `BinarySearchTree` extends the `BinaryTree` class and adds the two methods described in the requirements:
#### `add(value, root = this.root)`
My `add` method traverses the binary search tree recursively. It also uses ES6 default parameter values. 

If the value passed in is less than the current `root`, it checks if there is a `leftChild`; if there is not, it adds a new node with the `value` there. If there is a `leftChild`, it calls the `add` method again with the `value` and the `leftChild`:
    
`add(value, root.leftChild)`

If the `value` passed in is less than the current `root`, the logic is identical, but with the `rightChild`.

This recursive method has a time and space efficiency of `O(n)`.

#### `contains(value, root = this.root)`
I wrote two functioning versions of this method—one that uses recursion and one that does not. Both return `true` or `false` if they find the value passed in within the tree.

##### Recursive
The recursive method looks like this:
```
if (!root) return false;
if (root.value === value) return true;
if (root.value > value) return this.contains(value, root.leftChild);
if (root.value < value) return this.contains(value, root.rightChild);
```
This has a time and space efficiency of `O(n)`.

##### Non-recursive
The non-recursive method uses a while loop to traverse the tree and leverages the sorted nature of a binary search tree. It looks like this:
```
while (root.value !== value) {
  value < root.value ?
    root = root.leftChild :
    root = root.rightChild;
  if (!root) return false;
}
return true;
```
Because there's no build-up of the callstack with this method, the space efficiency is `O(1)`. The time efficiency remains `O(n)`, as it depends on the size of the tree being traversed. This is the method I will use going-forward.


'use strict';

// Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null; // when list is empty, the head is null
  }

  // method to add a node at the head of the list
  insert(value) {
    let node = new Node(value);
    node.next = this.head; // make the current head the second node
    this.head = node; // make the new node the the first node (the head)
    return this.head; // return the new list
  }

  // method to add a node at the end of the list
  add(value) {
    let node = new Node(value); // creae a new node with whatever value

    if (this.head === null) { // if the list is empty
      this.head = node; // make the new node the head
      return this.head; // return the new list
    }
    let current = this.head; // starting with the first node
    while (current.next !== null) { // while we're not on the last node
      current = current.next; // go down the list
    } // stops when we're on the last node in the list
    current.next = node; // add the new node to the end of the list
    return this.head; // return the new list
  }

  // method to return true/false if a value is found in the list
  includes(value) {
    let current = this.head; // starting at the first node
    while (current !== null) { // while we're not at the end of the list
      if (current.value === value) { // if the current node is what we're looking for, "true"
        return true;
      } else {
        current = current.next; // otherwise, go to the next node
      }
    }
    return false; // if we loop through without finding the value, "false"
  }

}

let list = new LinkedList(); //?
list.add('FIRST'); //?
list.add('SECOND'); //?
list.add('THIRD'); //?
list.insert('ZERO'); //?


console.log(list);
// list.head.next.next; //?
list.includes('THIRD'); //?

list;




// Add method - puts a node at the end



// Insert method - to the beginning
// takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.


// Includes method

// Print method



/*
Features

Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.

At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

Can successfully instantiate an empty linked list
Can properly insert into the linked list
The head property will properly point to the first node in the linked list
Can properly insert multiple nodes into the linked list
Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list

Ensure your tests are passing before you submit your solution.
*/
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
      this.head = node;
      return this.head;
    }

    let current = this.head; // starting with the first node
    while (current.next !== null) { // while we're not on the last node, loop through the list
      current = current.next;
    } // stops when we're on the last node in the list
    current.next = node; // add the new node to the end of the list
    return this.head; // return the new list
  }
}

let list = new LinkedList(); //?
list.insert('SOME VALUE BRO');
// list.insert('ANOTHER'); //?
list.add('THIRD');
console.log(list);
// list.head.next.next; //?


list; 




// Add method - puts a node at the end



// Insert method - to the beginning
// takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.


// Includes method

// Print method



/*
Features
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

This object should be aware of a default empty value assigned to head when the linked list is instantiated.

Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

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
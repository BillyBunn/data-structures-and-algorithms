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
    this.head = null;
  }
  // method to add a node at the head of the list
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }
  // method to add a node at the end of the list
  add(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      return this.head;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    return this.head;
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
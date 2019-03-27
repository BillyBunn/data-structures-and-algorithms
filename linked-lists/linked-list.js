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
  append(value) {
    let node = new Node(value); // creae a new node with whatever value

    if (!this.head) { // if the list is empty
      this.head = node; // make the new node the head
      return this.head; // return the new list
    }
    let current = this.head; // starting with the first node
    while (current.next) { // while we're not on the last node
      current = current.next; // go down the list
    } // stops when we're on the last node in the list
    current.next = node; // add the new node to the end of the list
    return this.head; // return the new list
  }

  // method to return true/false if a value is found in the list
  includes(value) {
    let current = this.head; // starting at the first node
    while (current) { // while we're not at the end of the list
      if (current.value === value) { // if the current node is what we're looking for, "true"
        return true;
      } else {
        current = current.next; // otherwise, go to the next node
      }
    }
    return false; // if we loop through without finding the value, "false"
  }

  // method to return an array of node values
  print() {
    let values = [];
    let current = this.head;
    while (current) { // while we're not at the end of the list
      values.push(current.value); // add the current node's value to the array
      current = current.next; // go to the next node
    }
    return values; // return the filled array of values
  }

  insertBefore(value, target) {
    let node = new Node(value);

    if (!this.head) { // if the list is empty
      this.head = node; // make the new node the head
      return this.head; // return the new list
    }

    let current = this.head;
    target;
    current.next.value; //?
    current.next.next.value; //?
    while (current.next.value !== target && current.next) {
      current.next.value; //?
      current = current.next;
    }
    if (current.next) { // if we're not at the end of the list
      node.next = current.next; // make our new node refer to the next node
      current.next = node;
    } else {
      current.next = node;
    }
    return this.head;
  }

  insertAfter(value, target) {
    let node = new Node(value);

    if (!this.head) { // if the list is empty
      this.head = node; // make the new node the head
      return this.head; // return the new list
    }

    let current = this.head;
    // stop loop if current node = target value
    while (current.value !== target || current.next) {
      current = current.next;
    }
    if (current.next) {
      node.next = current.next;
    }
    // no 'else', as this will happen whether or not we're on the last node
    current.next = node;
    return this.head;
  }


}



module.exports = LinkedList;

let list = new LinkedList(); //?
list.append('FIRST'); //?
list.append('SECOND'); //?
list.append('THIRD'); //?
// list.insert('ZERO'); //?
list.insertBefore('inserted', 'SECOND');
list.head.next; //?

list.insertBefore('ZFasdfasd', list.head.value); 

// console.log(list);
// // list.head.next.next; //?
// list.includes('THIRD'); //?
// list.print(); //?

// list;

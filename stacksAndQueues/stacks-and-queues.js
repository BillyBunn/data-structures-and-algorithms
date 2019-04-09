'use strict';

// Node class
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null;
  }

  // Push -  takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance
  push(value) {
    let node = new Node(value);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  // Pop - does not take any argument, removes the node from the top of the stack, and returns the node’s value
  pop() {
    if (this.top) {
      let popped = this.top.value;
      this.top = this.top.next;
      return popped;
    } else {
      return null;
    }
  }

  // Peek - does not take an argument and returns the value of the node located on the top of the stack
  peek() {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }
}

// Queue class
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // Enqueue - takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance
  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }

  // Dequeue - does not take any argument, removes the node from the front of the queue, and returns the node’s value
  dequeue() {
    if (this.front) {
      let dequeued = this.front;
      this.front = this.front.next;
      return dequeued;
    } else {
      return null;
    }
  }

  // Peek - does not take an argument and returns the value of the node located in the front of the stack
  peek() {
    if (this.front) {
      return this.front.value;
    }
  }
}

module.exports = { Node, Stack, Queue };
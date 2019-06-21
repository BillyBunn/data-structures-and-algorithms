'use strict';

function sortStack(stack1) {
  const stack2 = new Stack();

  while (!stack1.isEmpty()) {
    let temp = stack1.pop();
    while(!stack2.isEmpty() && stack2.peek() > temp) {
      stack1.push(stack2.pop());
    }
    stack2.push(temp);
  }
  while (!stack2.isEmpty()) {
    stack1.push(stack2.pop());
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.isEmpty()) return 'Stack is empty';
    let value = this.top.value;
    this.top = this.top.next;
    return value;
  }
  peek() {
    if (this.isEmpty()) return 'Stack is empty';
    return this.top.value;
  }
  isEmpty() {
    if (this.top === null) {
      return true;

    } else {
      return false;
    }
  }
  print() {
    let arr = [];
    let current = this.top;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

let stack = new Stack();
// stack.push(4);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(6);
// stack.push(5);
stack.push(0);
stack.push(8);
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(1);
stack.print(); //?
sortStack(stack);
stack.print(); //?

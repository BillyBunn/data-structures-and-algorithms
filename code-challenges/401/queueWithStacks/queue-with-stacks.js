'use strict';

const Node = require('../../../stacksAndQueues/stacks-and-queues.js').Node;
const Stack = require('../../../stacksAndQueues/stacks-and-queues.js').Stack;

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    if (value) {
      this.stack1.push(value);
      return this.stack1.top;
    } else {
      return null;
    }
  }
  dequeue() {
    if (this.stack1.peek()) {
      while (this.stack1.top.next) {
        let temp = this.stack1.pop();
        this.stack2.push(temp);
      }
      const dequeued = this.stack1.pop();
      while (this.stack2.peek()) {
        let temp = this.stack2.pop();
        this.stack1.push(temp);
      }
      return dequeued;
    } else {
      return null;
    }
  }
}
module.exports = PseudoQueue;
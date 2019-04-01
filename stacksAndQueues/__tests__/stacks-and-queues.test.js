'use strict';

const faker = require('faker');
const Node = require('../stacks-and-queues.js').Node;
const Stack = require('../stacks-and-queues.js').Stack;
const Queue = require('../stacks-and-queues.js').Queue;

describe('stacks-and-queues.js', () => {
  // Can successfully push onto a stack
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    expect(val).toEqual(stack.top.value);
  });

  // Can successfully push multiple nodes onto a stack
  it('Can successfully push multiple nodes onto a stack', () => {
    let stack = new Stack();
    for (let i = 0; i < 10; i++) {
      stack.push(i);
    }
    expect(stack.top.value).toBe(9);
    expect(stack.top.next.value).toBe(8);
    expect(stack.top.next.next.value).toBe(7);
    expect(stack.top.next.next.next.value).toBe(6);
  });

  // Can successfully pop off the stack
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    stack.push(val);
    let poppedVal = stack.pop();
    expect(poppedVal).toEqual(val);
  });

  // Can successfully empty a stack after multiple pops.
  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(val);
    stack.push(val);
    stack.push(val);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  // Can successfully peek the next item on the stack.
  it('CCan successfully peek the next item on the stack', () => {
    let stack = new Stack();
    let val = faker.random.word();
    stack.push(faker.random.word());
    stack.push(val);
    let peekedVal = stack.peek();
    expect(peekedVal).toEqual(val);
  });

  // Can successfully instantiate an empty stack
  // Can successfully enqueue onto a queue
  // Can successfully enqueue multiple items into a queue
  // Can successfully dequeue off of a queue the expected value
  // Can successfully peek into a queue, seeing the expected value
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue

});


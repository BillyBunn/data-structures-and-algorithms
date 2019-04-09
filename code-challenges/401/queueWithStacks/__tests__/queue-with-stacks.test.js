'use strict';

const PseudoQueue = require('../queue-with-stacks.js');
const faker = require('faker');

const queue = new PseudoQueue;
let value = faker.random.word();

describe('queue-with-stacks.js', () => {
  it('can enqueue a new value', () => {
    value = faker.random.word();
    queue.enqueue(value);
    expect(queue.stack1.peek()).toBe(value);
  });
  it('can enqueue multiple values', () => {
    let someQueue = new PseudoQueue();
    let values = [
      'string', 
      123, 
      true, 
      {key:'value'},
    ];
    someQueue.enqueue(values[3]);
    someQueue.enqueue(values[2]);
    someQueue.enqueue(values[1]);
    someQueue.enqueue(values[0]);
    expect(someQueue.stack1.top.value).toEqual(values[0]);
    expect(someQueue.stack1.top.next.value).toEqual(values[1]);
    expect(someQueue.stack1.top.next.next.value).toEqual(values[2]);
    expect(someQueue.stack1.top.next.next.next.value).toEqual(values[3]);
  });
  it('returns null if no value is passed in to enqueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue();
    expect(newQueue.stack1.peek()).toBe(null);
  });

  it('can dequeue a value using FIFO', () => {
    let dequeued = queue.dequeue();
    expect(dequeued).toBe(value);
  });
  it('can dequeue multiple values using FIFO', () => {
    let pseudoQueue = new PseudoQueue();
    let values = [
      'string', 
      123, 
      true, 
      {key:'value'},
    ];
    pseudoQueue.enqueue(values[0]);
    pseudoQueue.enqueue(values[1]);
    pseudoQueue.enqueue(values[2]);
    pseudoQueue.enqueue(values[3]);
    let sameValues = [
      pseudoQueue.dequeue(),
      pseudoQueue.dequeue(),
      pseudoQueue.dequeue(),
      pseudoQueue.dequeue(),
    ];
    expect(values[0]).toEqual(sameValues[0]);
    expect(values[1]).toEqual(sameValues[1]);
    expect(values[2]).toEqual(sameValues[2]);
    expect(values[3]).toEqual(sameValues[3]);
  });
  it('returns null if dequeued when empty', () => {
    let newQueue = new PseudoQueue();
    expect(newQueue.dequeue()).toBe(null);
  });

});
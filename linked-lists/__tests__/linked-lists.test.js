'use strict';

const LinkedList = require('../linked-list.js');
const faker = require('faker');

let list = new LinkedList(); // creates a linked-list instance
let length = faker.random.number();
let values = [];
for (let i = 0; i < length; i++) {
  values.push(faker.random.word()); // fills an array of random length with random word values
}

for (let i = 0; i < values.length; i++) {
  list.insert(values[i]); // fills the linked-list with those random values
}

values.reverse(); // reverses the values (so it's in the same order as the list)


// console.log('values', values);

describe('linked lists', () => {
  it('Can successfully instantiate an empty linked list', () => {
    expect(new LinkedList()).toBeTruthy();
    expect(new LinkedList().head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let newValue = faker.random.word();
    list.insert(newValue);
    values.unshift(newValue);
    expect(list.head.value).toBe(values[0]); // checks the first node's value against the values array
  });

  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head).toBeTruthy();
    expect(list.head.next).not.toBeNull();
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    // let reversedValues = values.reverse();
    let current = list.head;
    for (let i = 0; i < values.length; i++) {
      // console.log(current.value, values[i]);
      expect(current.value).toBe(values[i]); // checks every value inserted in the linked list against the values array (reversed)
      current = current.next;
    }
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let randomValue = values[faker.random.number(values.length - 1)]; // picks a random value in the values array
    expect(list.includes(randomValue)).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let randomValue = faker.random.number(); // random number (tested list only contains words)
    expect(list.includes(randomValue)).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    expect(list.print()).toEqual(values);
  });

});

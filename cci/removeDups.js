'use strict';

// Basic singly-linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  append(value) {
    let newNode = new Node(value);
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  print() {
    let values = [];
    let current = this;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values);
  }
}

// 2.1: Remove Dups, pg. 94
function removeDups(node) {
  const set = new Set();
  let current = node;
  let previous = null;

  while (current) {
    if (set.has(current.value)) {
      previous.next = current.next;
      current.next = null;
      current = previous.next;
    } else {
      set.add(current.value);
      previous = current;
      current = current.next;
    }
  }
  return node;
}

// Checks
let llDups = new Node('A');
llDups.append('B');
llDups.append('A');
llDups.append('C');
llDups.append('B');
llDups.append('C');
llDups.print();

removeDups(llDups);
llDups.print();

let llNoDups = new Node('A');
llNoDups.append('B');
llNoDups.append('C');
llNoDups.append('D');
llNoDups.append('E');
llNoDups.append('F');
llNoDups.print();

removeDups(llNoDups);
llNoDups.print();
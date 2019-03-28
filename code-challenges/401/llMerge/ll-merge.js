'use strict';

const LinkedList = require('../../../linked-lists/linked-list');

const listOdd = new LinkedList();
const listEven = new LinkedList();

for (let i = 0; i < 6; i++) {
  if ((i + 1) % 2) {
    listOdd.append(i + 1);
  } else {
    listEven.append(i + 1);
  }
}

listOdd.append('foo');
listOdd.append('bar');


listOdd.print(); //?
listEven.print(); //?

function mergeLists(listA, listB) {
  // if(!listA.head || !listB.head) return null;

  let currA = listA.head, currB = listB.head, nextA, nextB;

  while (currA.next !== null && currB.next !== null) {
    currA.value; //?
    currB.value; //?

    nextA = currA.next;
    nextB = currB.next;

    currA.next = currB;
    currB.next = nextA;

    currA = nextA;
    currB = nextB;
  }
  if (!currB.next) { // if listB ends b/f listA
    currA;
    currB;
    console.log(true);
    currB.next; //?
    currA.next;//?
    // currB.next = nextA;

    


    // currA.next = currB;
    // return listA;
  }
  if (!currA.next) { // if listA ends b/f listB
    // currA.next 
    console.log(true);
  }

  return listA;
}


function print(list) {
  let values = [];
  let current = list.head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  return values;
}
print(listEven); //?

// mergeLists(listOdd,listEven); //?
let newList = mergeLists(listOdd, listEven); //?
print(newList);  //?
// newList.print(); //?
// newList.value; //?
// newList.next.value; //?
// newList.next.next.value; //?
// newList.next.next.next.value; //?
# Singly Linked List
* [Submission PR](https://github.com/BillyBunn/data-structures-and-algorithms/pull/24)
* [Travis CI build](https://travis-ci.com/BillyBunn/data-structures-and-algorithms/builds/105565575)

## Summary
Creates classes for a linked-list and nodes in the list. Uses ES6 class syntax. 

As a singly linked-list, each node has a reference to the next node in the list.

## Challenge
### Features
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
* Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  * This object should be aware of a default empty value assigned to head when the linked list is instantiated.
  * Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  * Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  * Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.
* At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

### Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

#### Tests:
* Can successfully instantiate an empty linked list
* Can properly insert into the linked list
* The head property will properly point to the first node in the linked list
* Can properly insert multiple nodes into the linked list
* Will return true when finding a value within the linked list that exists
* Will return false when searching for a value in the linked list that does not exist
* Can properly return a collection of all the values that exist in the linked list
* Ensure your tests are passing before you submit your solution.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I created classes for both nodes and linkedlists. I imagine that with these base classes, I can create a doublely linked-list class that extends this class, but has unique properties. 

The Big O for time/space is `O(1)` for the `.insert(value)` method, as it adds to the beginning of the list.

All other methods require looping through the list, so efficiency is dependent always on the length of the list. The Big O for time in these methods will be `O(n)`, where `n` is the number of nodes in the list.

<!-- ## API
Description of each method publicly available to your Linked List -->

# Code Challenge: Class 06
Completed with Shannon Tully.

Challenge adds 3 methods to LinkedList class:
* `.append(value)` - adds node to end of list
* `.insertBefore(value, target)` - adds node before a certain value
* `.insertAfter(value, target)` - adds node after a certain value

## Whiteboard
![Class 6 whiteboard](https://i.imgur.com/A1rN2CN.jpg)

## Resources
The work done on this data structure was largely informed by a lecture at Code Fellows by John Cokos, the _Code 401: Advanced JavaScript_ instructor.

Other resources to credit for my work include:
* [Linked Lists in JavaScript (ES6 code)](https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571) by Shubhangi Raj Agrawal
* [Linked List in JavaScript](https://namitamalik.github.io/Linked-list-in-Javascript/) by Namita Malik
* [GeeksForGeeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
* [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
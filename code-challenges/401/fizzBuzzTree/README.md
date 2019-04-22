# FizzBuzz Tree
<!-- Short summary or background information -->
[![Build Status](https://travis-ci.com/BillyBunn/data-structures-and-algorithms.svg?branch=fizzbuzz_tree)](https://travis-ci.com/BillyBunn/data-structures-and-algorithms)

## Challenge
* Write a function called FizzBuzzTree which takes a tree as an argument.
* Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
  * If the value is divisible by 3, replace the value with “Fizz”
  * If the value is divisible by 5, replace the value with “Buzz”
  * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
* Return the tree with its new values.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

As my partner (Jason Burns) and I visualized the problem domain, we knew we needed to "look" at each node in the tree and replace the value with "Fizz", "Buzz", or "FizzBuzz", depending on its divisibility. 

We opted for a depth-first traversal of the tree to look at each node—though a breadth-first traversal would've worked as well, we thought pulling in the `Queue` class and methods was just one more step we didn't need (also, recursive functions are fun).

We wrote a helper function called `traverseChange` within our algorithm to do most of the work (the recursive traversal, the value-changing). Our main `fizzBuzzTree` function calls this helper with the root of whatever tree is passed in.

For handling any thrown errors in the process, I used a try/catch to call our recursive helper function. I did this because there were a couple different errors I wanted to throw in the function _and_ the helper function within. (Note that the try/catch isn't on the whiteboard)

### Tests
The main things I wanted to test for were:
* **"Happy Path"** 
  - the function returns the tree with values replaced, as expected
  
* **Expected failure**
  - if the function is invoked without a tree as a parameter, should throw an error
  - if any non-number values are found in the tree, shuold throw an error

* **Edge cases**
  - if there are no values to replace, it returns the original tree

### The Big O
#### Time
The time efficiency of this algorithm depends on the size of the input (the tree). 

The time efficiency is therefore `O(n)`.

#### Space
Because our algorithim is a recursive solution, the callstack builds up as the tree is traversed depth-first. The biggest the callstack will ever be depends on the depth (or height) of the tree. 

The space efficiency is therefore `O(h)`, where `h` is the height of the tree.

## Solution
_Completed in collaboration with Jason Burns_
![fizz buzz tree whiteboard](../../../assets/fizz-buzz-tree.jpg)

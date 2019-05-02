# First repeated word
Our first challenge using the hashtable data structure.

## Challenge
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Approach & Efficiency
My partner and I knew we wanted to leverage a hashtable's O(1) lookup time to write an efficient algorithm to solve this challenge. We first decided to normalize the input (remove punctuation, set to lowercase), then split each word (characters separted by spaces) into an array. 

We created a hashtable. We then looped through our array of words:
* At each loop through, we checked our hashtable to see if the current word was already stored inside (using the `contains` method). 
* If `contains` returns `true`, we've found the first word that repeats, so that word is returned.
* If `contains` returns `false`, we add the current word to the hashtable and move on to the next iteration of the loop.
* If we loop through the entire array and `contains` never returns `true`, we return `null`, to indicate there were no repeating words in the input string.

#### Space
The space efficiency of this algorithm is O(n), as it depends on the number of words in the input string.

#### Time
The time efficiency is O(n<sup>2</sup>):
* Our hashtable deals with collisions by having a linked list at each "bucket" in the table and appending colliding key/value pairs to that bucket. 
* A worst-case scenario would be a large number of collisions (caused by an imperfect hashing algorithm), meaning we have to traverse through several linked lists within our table _and_ never find a repeating word (or the first and last word in the string are what repeat). 
* This would mean looping all the way through our array of words _and_ traversing (looping) through a large linked list bucket within the table as we check if it `contains` the current word in our loop.

## Solution
Completed with Chris Morton
![Whiteboard](https://i.imgur.com/hm6NmmL.jpg)
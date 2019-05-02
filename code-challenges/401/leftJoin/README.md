# Hashmap LEFT JOIN
Leveraging hashmaps to left join two maps.

Because this challenge required the inputs to be "hashmaps", I created two versions of our algorithm with a couple different data structures provided in JavaScript:
1. Using the `Map` constructor (new to ES6); this leans on some built-in `Map` methods like `Map.has()`.
2. Using the `Object` constructor; this uses `Object.hasOwnProperty` instead.


## Challenge
* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
Avoid utilizing any of the library methods available to your language.

## Approach & Efficiency
Our algorithm loops through the right map and checks if the left map contains the current key. 
* Create an empty array and call it 'output'.
* Loop through the keys of the right map.
  * At each key, we construct an array with the key (word), right map value (synonym), and left map value (antonym).
  * If the left map does not contain the key, it sets the antonym to 'null'.
  * We then push this array of 3 (word, synonym, antonym) to the output array.
* When the loop is done, return the output array.

#### Efficiency
* **Space**: O(n) - our output array's size is dependent on the size of the input
* **Time**: O(n) - we have to traverse all the keys of the right map

## Solution
Completed with Chris Morton
![Whiteboard](https://i.imgur.com/qMAI8W4.jpg)
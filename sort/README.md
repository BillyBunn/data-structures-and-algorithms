# Insertion Sort
Insertion Sort is one of the three "simple sorts" (bubble, selection, insertion). These types of sorting algorithms are all "brute force" and have a Big O (worst-case complexity) for time of n<sup>2</sup>.

## Challenge
Write a function for insertion sort that takes in an unsorted array and returns the array sorted using insertion sort.

## Approach & Efficiency
To implement an Insertion Sort, I used a `while` loop within a `for` loop; the `for` loop iterated over the entire array, the `while` loop only ran if the current item was less than the item prior. 

The worst case scenario for this sort is an array of completely backwards sorted numbers. Because there's a loop within a loop, the time complexity is **O(n<sup>2</sup>)**.
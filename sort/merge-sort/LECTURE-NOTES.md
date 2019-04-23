# Lecture Notes: Merge Sort

**Merge Sort** is a common sorting algorithm and a popular technical interview topic. 

Merge Sort takes what's called a "divide and conquer" approach, meaning it takes one big problem (sort this array of numbers in order) and divides it into sub-problems.

It's one of the most time-efficient sorting algorithms, with a time complexity of O(nLogn).

## Learning Objectives
* Why sorting is important
* How Merge Sort works conceptually
* What recursion is and how it's used in Merge Sort
* The efficiency of Merge Sort and when to use it
* How to implement a Merge Sort in JavaScript

## Lecture Flow

* **Sorting is important and you should care about it**
  * The world runs on data and there's a lot of it. To deal with all this data and _process_ it, it's often required or incredibly helpful to _sort_ the data first so it's more useful.
  * Additionally, sorting questions are incredibly common in technical interviews—if you want a job, you need to learn about sort algorithims.

* **What is sorting?**
  * Taking data and reorganizing it into some kind of predictable order (like least to greatest). This makes it easier to process/do stuff with.
  * How do you sort something? There are a number of ways, but they all come down to a simple comparison: _“Is this number less than or greater than that number?”_ _When_ and _how_ you make that comparison is what differntiates different approaches to sorting, called **sorting algorithms**.

* **Merge Sort**
  * A common sorting algorithm. There's a high chance you'll encounter an interview question about merge sorts.
  * It takes what's called a _"divide and conquer"_ approach, meaning it takes one big problem (sort this array of numbers in order) and divides it into sub-problems. We achieve this by splitting the list of data in half, sorting each half separately, then combining the halves together.
  * It's best to visualize this with an array of random numbers. (See Diagram)

* **Recursion**
  * What it is
  * How Merge Sort uses it

* **Efficiency of Merge Sort and when to use it**
  * Time and space efficiency & why
  * When it's best to use Merge Sort
  * When you shouldn't use Merge Sort (and should use a different algorithm)

  
## Diagram

![Merge Sort Visual](https://i.imgur.com/dilQQXO.jpg)

## Algorithm

Describe in detail how the algorithm works.
Include small code snippets to possibly support the points

## Pseudocode

```javascript
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if arr > 1
       DECLARE mid <-- n/2
       DECLARE b <-- arr[0...mid]
        // put the second half in the other array
        DECLARE c <-- arr[mid...n]
        Mergesort(b)
        Mergesort(c)
        Merge(B, c, arr)

ALGORITHM Merge(b, c, a)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < b && j < c
        if b[i] <= c[j]
            a[k] <-- b[i]
            i <-- i + 1
        else
            a[k] = c[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = b.Length
       add remaining of c to a
    else
       add remaining b to a
       
    return a
```

## Readings and References

**Watch**

* [mycodeschool](https://www.youtube.com/watch?v=TzeBrDU-JaY)
* [GeeksforGeeks](https://www.youtube.com/watch?v=JSceec-wEyw)

**Read**

* [HackerEarth: Merge Sort Tutorial](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/)
* [GeeksforGeeks: Merge Sort](https://www.geeksforgeeks.org/merge-sort/)
* [InterviewBit: Merge Sort Algorithm](https://www.interviewbit.com/tutorial/merge-sort-algorithm/)

**Bookmark**

* [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
* [CMU: Sorting](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html)
* [Big-O Cheat Sheet](http://bigocheatsheet.com/)

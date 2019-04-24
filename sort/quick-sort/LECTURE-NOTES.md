# Lecture Notes: Quick Sort

**Quick Sortt** is a common sorting algorithm and a popular technical interview topic. 

Similar to Merge Sort, Quick Sort also takes what's called a "divide and conquer" approach, meaning it takes one big problem (sort this array of numbers in order) and divides it into sub-problems. We'll see this in action with something called **recursion**, where a function calls _itself_ within the function.

It's one of the most time-efficient sorting algorithms, with a worst-case time complexity of O(nLogn).

The space efficiency of Quick Sort is O(n). 

## Learning Objectives
* Why sorting is important
* How Quick Sort works conceptually
* What recursion is and how it's used in Quick Sort
* The efficiency of Quick Sort and when to use it
* How to implement a Quick Sort in JavaScript

## Lecture Flow
* **Sorting is important and you should care about it**
  * The world runs on data and there's a lot of it. To deal with all this data and _process_ it, it's often required or incredibly helpful to _sort_ the data first so it's more useful.
  * Additionally, sorting questions are incredibly common in technical interviews—if you want a job, you need to learn about sort algorithims.

* **What is sorting?**
  * Taking data and reorganizing it into some kind of predictable order (like least to greatest). This makes it easier to process/do stuff with.
  * How do you sort something? There are a number of ways, but they all come down to a simple comparison: _“Is this number less than or greater than that number?”_ _When_ and _how_ you make that comparison is what differntiates different approaches to sorting, called **sorting algorithms**.

* **Merge Sort**
  * Walk through visual diagram
  * New term: **pivot**
    * Explanation
  * New term: **partition**
    * Explanation

* **Recursion**
  * What it is
  * How Merge Sort uses it

* **Efficiency of Quick Sort and when to use it**
  * Time and space efficiency & why
  * When it's best to use Quick Sort
  * When you shouldn't use Quick Sort (and should use a different algorithm)
  
## Diagram

![Imgur](https://i.imgur.com/KauMd56.jpg)
* Given an array of numbers, we set rightmost value as the **pivot** (more on picking pivots later). This is the number we're trying to put in its proper place.
* We set a **low** equal to one less than the first index, and begin looping through the array. 
* At each pass through the loop, we'll do a comparison: Is the array at **i** less than or equal to the **pivot**?
* If it isn't, we don't do anything and increment **i**. 7 isn't less than 4, so we move on.
---

![Imgur](https://i.imgur.com/yXZdzav.jpg)
* 2 _is_ less than 4, so we increment **low** and make our first **swap**. 
* We swap the values at **low** and **i** then move on.
---

![Imgur](https://i.imgur.com/LYnZ1UP.jpg)
* 1 is less than 4, so we swap again.
---

![Imgur](https://i.imgur.com/5DekdMX.jpg)
* 8 isn't less than 4, so we move on.
---

![Imgur](https://i.imgur.com/16nSb5e.jpg)
* 6 isn't less than 4, so we move on.
---

![Imgur](https://i.imgur.com/H6SVhMG.jpg)
* 3 is less than 4, so we swap again.
---

![Imgur](https://i.imgur.com/b5taRgr.jpg)
* 5 isn't less than 4, so we move on.
---

![Imgur](https://i.imgur.com/jyejoUA.jpg)
* We've reached the end of our array.
* Now we place our **pivot** (4) right after our **low** (3).
* 4 is now in its proper place—all the values before 4 are less than it, and all the values after are greater.
* To get the rest of the values in their proper places, we repeat the same operation for the values on the left and right of 4. 


## Algorithm
#### [`quick-sort.js` JavaScript implementation](quick-sort.js)
* Run the code  in `quick-sort.js` to see useful console logs for an entire example.
* Alternatively, use the VSCode debug tool to walk through the running code. Break points have already been set for you. 

## Pseudocode

```javascript
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the Algorithm
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot
    DEFINE pivot <-- arr[right]
    // get the index of the lower value
    DEFINE low <-- left - 1

    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)
     
     Swap(arr, right, low + 1)
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Readings and References

**Watch**

* [Quicksort: Partitioning an array](https://www.youtube.com/watch?v=MZaf_9IZCrc)
* [Quick sort in 4 minutes](https://www.youtube.com/watch?v=Hoixgm4-P4M)

**Read**

* [Understanding Quicksort (with interactive demo)](http://me.dt.in.th/page/Quicksort/)
* [A Quick Explanation of Quick Sort](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b)

**Bookmark**

* [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)
* [CMU: Sorting](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html)
* [Big-O Cheat Sheet](http://bigocheatsheet.com/)


# Hashtables
<!-- Short summary or background information -->

## Challenge
Implement a Hashtable with the following methods:
1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. `get`: takes in the key and returns the value from the table.
3. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. `hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
### Approach
I tried to keep my hashtable as straightforward as possible and keep all methods simple and easy to read. To acheive this, I used ES6 class syntax and ternary operators for lookups.
* To handle collisions when using the `add` method, I created a linked list for each "bucket" in the hashtable—`add(key, value)` will append the linked list bucket with the `value` if there are already values present at the hashed `key`.
```
add(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) this.map[hash] = new LinkedList();
    let entry = { [key]: value };
    this.map[hash].append(entry);
  }
```
* My `get(key)` method is a simple two lines: I hash the key then use a ternary to call a helper function that traverses the bucket (linked list) and returns the value.  
```
get(key) {
    let hash = this.hash(key);
    return this.map[hash] ? 
      this.searchBucket(this.map[hash], key) : 
      null;
}
```
* `contains(key)` is identical to `get`, but returns a boolean instead of the values:
```
get(key) {
    let hash = this.hash(key);
    return this.map[hash] ? this.map[hash].values() : null;
  }
```
* My `hash(key, value)` method uses a simple hashing algorithm:
  1. Split key into an array of characters
  2. Add (or multiply) all the UTF-16 values together
  3. Multiply by a large prime number (like 599)
  4. Divide by the total size of the array
```
hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }
```
* I also built a simple `print` method to show hashtable values in the console. It uses a linked list method called `values`, which prints an array of all linked list values.
```
print() {
    this.map.forEach((bucket, idx) => {
      console.log(idx, bucket && bucket.values());
    });
  }
```
### Efficiency
* `add`
  * **Time** - O(1)
  <!-- * **Space** - O(n) -->
* `get`
  * **Time** - O(1) 
    * With a perfect hash, the lookup is O(1). If there are collisions, it trends toward O(n), as we have to travers a linked list of that bucket to find the value. Worst case is the time it takes to traverse that bucket full of collisions.
  <!-- * **Space** - O(1) -->
* `contains`
  * **Time** - O(1)
  * **Space** - O(1)
* `hash`
* `print`
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available in each of your hashtable -->
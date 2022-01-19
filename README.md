<br />
<div align="center">
  <h3 align="center">Data Structures</h3>
  <p align="center">
    Data Structures built in JavaScript
  </p>
</div>

# Stack
### Initialization
```javascript
  let list = new Stack([0,1,2]);
```
### Operations
| Method    | Description      |
| -------- | --------------|
| **.push(value)**   | Inserts _value_ to top of list |
| **.pop(value)**   | Removes _value_ from top of list |
| **.peek(index)**   | Shows value at top _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of entire list|

# Queue
### Initialization
```javascript
  let list = new Queue([0,1,2]);
```
### Operations
| Method    | Description      |
| -------- | --------------|
| **.enqueue(value)**   | Inserts _value_ to front of list |
| **.dequeue(value)**   | Removes _value_ from back of list |
| **.peek(index)**   | Shows value at front _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of entire list|

# Hashtable
## Initialization
```javascript
  let size = 3;
  let list = new HashTable(size);
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.insert(value)**   | Inserts _value_ |
| **.remove(value)**   | Removes _value_ |
| **.search(value)**   | Searches _value_ |
| **.print()**   | Prints the entire hash table |
| **.getSize()**   | Gets the size|

# Linked List
### Types
* Singly Linked List
* Doubly Linked List
* Circular Singly Linked List
### Initialization
```javascript
  let list = new SinglyLinkedList([0,1,2]);
  let list = new DoublyLinkedList([0,1,2]);
  let list = new CircularSinglyLinkedList([0,1,2]);
```
### Operations
| Method    | Description      |
| -------- | --------------|
| **.append(value)**   | Inserts _value_ to back of list |
| **.remove(value)**   | Removes _value_ from list |
| **.insert(value, value2)**   | Inserts _value_ in front of _value2_ |
| **.peek(index)**   | Shows value at _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of the entire list|

<!--
# Binary Search Tree
## Types
* Binary Search Tree
## Initialization
```javascript
  let list = new BinarySearchTree();
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.insert(value)**   | Inserts _value_ to tree |
| **.remove(value)**   | Removes _value_ from tree |
| **.search(value)**   | Searches _value_ in tree |
| **.printPreOrder()**   | Print values pre-ordered |
| **.printInOrder()**   | Print values in-ordered |
| **.printPostOrder()**   | Print values post-ordered |
| **.isFull**   | Returns _true_ if tree is a full binary tree |
| **.isComplete**   | Returns _true_ if tree is a completed binary tree |
| **.isPerfect**   | Returns _true_ if tree is a perfect binary tree |
| **.isBalanced**   | Returns _true_ if tree is a balanced binary tree |
|**.getHeight()**   | Returns height of tree |
|**.getRoot()**   | Returns root of tree |
-->

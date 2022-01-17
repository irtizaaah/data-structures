# Data Structures
A Data Structures in JavaScript.<br>

# Stack
## Initialization
```javascript
  let list = Stack([0,1,2]);
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.push(value)**   | Inserts _value_ to top of list |
| **.pop(value)**   | Removes _value_ from top of list |
| **.peek(index)**   | Shows value at top _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of entire list|

# Queue
## Initialization
```javascript
  let list = Queue([0,1,2]);
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.enqueue(value)**   | Inserts _value_ to front of list |
| **.dequeue(value)**   | Removes _value_ from back of list |
| **.peek(index)**   | Shows value at front _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of entire list|

## Initialization
```javascript
  let size = 3;
  let list = HashTable(size);
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.insert(value)**   | Inserts _value_ |
| **.remove(value)**   | Removes _value_ |
| **.search(value)**   | Searches _value_ |
| **.print()**   | Prints the entire hash table |
| **.getSize()**   | Gets the size|

## Types
* Singly Linked List
* Doubly Linked List
* Circular Singly Linked List
## Initialization
```javascript
  let list = SinglyLinkedList([0,1,2]);
  let list = DoublyLinkedList([0,1,2]);
  let list = CircularSinglyLinkedList([0,1,2]);
```
## Operations
| Method    | Description      |
| -------- | --------------|
| **.append(value)**   | Inserts _value_ to back of list |
| **.remove(value)**   | Removes _value_ from list |
| **.insert(value, value2)**   | Inserts _value_ in front of _value2_ |
| **.peek(index)**   | Shows value at _index_ |
| **.print()**   | Prints entire list |
| **.getSize**   | Returns size of the entire list|

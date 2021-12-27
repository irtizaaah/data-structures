import {SinglyLinkedList} from "./linked-list/singly-linked-list.js"
import {DoublyLinkedList} from "./linked-list/doubly-linked-list.js"
import {CircularSinglyLinkedList} from "./linked-list/circular-singly-linked-list.js"

var list = new CircularSinglyLinkedList([0,1,2]);
list.append(10);
list.remove(2);
list.insert(55,1);
list.print();
console.log(list.peek(list.getSize-1));

var list = new DoublyLinkedList([0,1,2]);
list.append(10);
list.remove(2);
list.insert(55,1);
list.print();
console.log(list.peek(list.getSize-1));

var list = new SinglyLinkedList([0,1,2]);
list.append(10);
list.remove(2);
list.insert(55,1);
list.print();
console.log(list.peek(list.getSize-1));


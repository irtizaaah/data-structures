import {SinglyLinkedList} from "./linked-list/singly-linked-list.js"
import {DoublyLinkedList} from "./linked-list/doubly-linked-list.js"
import {CircularSinglyLinkedList} from "./linked-list/circular-singly-linked-list.js"
import {Stack} from "./abstract-data-types/stack.js"
import {Queue} from "./abstract-data-types/queue.js"

let list1 = new CircularSinglyLinkedList([0,1,2]);
list1.append(30);
list1.remove(2);
list1.insert(40,1);
list1.print();
console.log(list1.peek(list1.getSize-1));

let list2 = new DoublyLinkedList([0,1,2]);
list2.append(30);
list2.remove(2);
list2.insert(40,1);
list2.print();
console.log(list2.peek(list2.getSize-1));

let list3 = new SinglyLinkedList([0,1,2]);
list3.append(30);
list3.remove(2);
list3.insert(40,1);
list3.print();
console.log(list3.peek(list3.getSize-1));

let list4 = new Stack([0,1,2]);
list4.push(30);
list4.push(40);
console.log(list4.pop());
list4.peek();
list4.print();

let list5 = new Queue([0,1,2]);
list5.enqueue(30);
list5.enqueue(40);
console.log(list5.dequeue());
list5.peek();
list5.print();
import {SinglyLinkedList} from "./singly-linked-list.js"

export class DoublyLinkedList extends SinglyLinkedList{
    constructor(list){
        super(list);
    }

    _createDefaultNodes(){
        this.head = this._createNewNode('head'); // this is a dummy head (doesn't store a value)
        this.tail = null; // No tail is being used

    }

    _linkNodes(leftNode, rightNode){
        leftNode.setNext = rightNode;
        rightNode.setPrevious = leftNode;
    }

    print(){
        let currentNode = this.head;
        let printedList = this.head.getValue + "->";
        
        while(currentNode.getNext !== null){
            currentNode = currentNode.getNext;

            if(currentNode.getPrevious !== null){
                printedList = printedList + "<-" + currentNode.getValue + "->";
            }
            else{
                printedList = printedList + currentNode.getValue + "->";
            }
        }

        printedList = printedList + currentNode.getNext;
        console.log(printedList);
    }
}

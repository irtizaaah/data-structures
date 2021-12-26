import {SinglyLinkedList} from "./singly-linked-list.js"

export class CircularLinkedList extends SinglyLinkedList{
    constructor(list){
        super(list);
    }

    _createDefaultNodes(){
        this.head = this._createNewNode('head'); // this is a dummy head (doesn't store a value)
        this.tail = this._createNewNode('tail'); // this is a dummy tail (doesn't store a value)

        this._linkNodes(this.head, this.tail);
        this._linkNodes(this.tail, this.head);

    }

    _linkNodes(leftNode, rightNode){
        if(leftNode.getNext === this.tail){
            rightNode.setNext = this.tail;
        }

        leftNode.setNext = rightNode;
    }

    _traverseNodes(targetNode = this.tail){ // returns the node before target node
        let currentNode = this.head;

        while(currentNode.getNext !== targetNode & currentNode.getNext !== this.tail){
            currentNode = currentNode.getNext;
        }

        return currentNode;
    }

    _traverseValues(targetValue = ""){ // returns the node before node with target value
        let currentNode = this.head;

        while(currentNode.getNext.value !== targetValue & currentNode.getNext !== this.tail){
            currentNode = currentNode.getNext;
        }

        return currentNode;
    }

    print(){
        let currentNode = this.head;
        let printedList = "...head->";
        
        while(currentNode.getNext !== this.tail){
            currentNode = currentNode.getNext;
            printedList = printedList + currentNode.getValue + "->";
        }

        printedList = printedList + "tail->head...";
        console.log(printedList);
    }
}
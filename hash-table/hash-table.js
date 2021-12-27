import {Node} from "./node.js"

export class HashTable{
    constructor(size = 10, list = null){
        this.table = [];
        this.size = size;

        for(let i = 0; i < size; i++){
            this.table[i] = null;
        }
    }

    get getSize(){
        return this.size;
    }

    _traverseNodes(index, targetNode = null){ // return node before node with target value
        let currentNode = this.table[index];

        while(currentNode.getNext !== targetNode){ // iterates to the last node
            currentNode = currentNode.getNext;
        }
        return currentNode;
    }

    _traverseValues(value){ // return node before node with target value
        let index = this.hash(value);
        let currentNode = this.table[index];

        while(currentNode.getNext.getValue !== value & currentNode.getNext !== null){
            currentNode.setNext = currentNode;
        }

        return currentNode;
    }

    hash(value){
        value = String(value);
        let num = 0;

        for(let i = 1; i <= value.length; i++){
            num = num * 31 + value.charCodeAt([i-1]);
        }

        return num % this.size;
    }

    insert(value){
        let newNode = new Node(value, null);
        let index = this.hash(value);

        if(this.table[index] === null){
            let headNode = new Node('head', null);
            this.table[index] = headNode;
            headNode.setNext = newNode
        }
        else{
            let lastNode = this._traverseNodes(index);
            lastNode.setNext = newNode;
        }
    }

    search(value){
        let currentNode = this._traverseValues(value);
        return currentNode.getNext.getValue;
    }

    remove(value){
        let currentNode = this._traverseValues(value);
        currentNode.setNext = null;
    }

    print(){
        let currentNode;
        let printedList = "";

        for(let i = 0; i < this.size; i++){
            currentNode = this.table[i];
            printedList = printedList + i + "->";
                while(currentNode !== null){ // iterates to the last node
                    printedList = printedList + currentNode.getValue + "->";
                    currentNode = currentNode.getNext;
                }
                printedList = printedList + currentNode;
            printedList = printedList + "\n";
        }

        console.log(printedList);
    }
}
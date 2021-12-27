import {Node} from "./node.js"

export class SinglyLinkedList{
    constructor(list){
        this._createDefaultNodes();
        
        this.size = 0;

        if(list !== null){ // convert list into linked list
            for(let i = 0; i < list.length; i++){
                this.append(list[i]);
            }
        }
    }

    _createDefaultNodes(){
        this.head = this._createNewNode(this.head); // this is a dummy head (doesn't store a value)
        this.tail = null; // No tail is being used
    }

    _createNewNode(value = null, next = null, previous = null){
        return new Node(value, next, previous);
    }

    _updateSize(incrementOrDecrement){ // takes in a boolean (true for increment, false for decrement)
        if(incrementOrDecrement === true){
            this.size = this.size + 1;
        }
        else if(incrementOrDecrement === false){
            this.size = this.size - 1;
        }
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

    _linkNodes(leftNode, rightNode){
        leftNode.setNext = rightNode;
    }

    get getSize(){
        return this.size;
    }

    append(value){
        let newNode = this._createNewNode(value);

        if(this.head.getNext === this.tail){ // if the first node doesn't exist
            this._linkNodes(this.head, newNode);
        }
        else{
            let lastNode = this._traverseNodes(); // return last node
            this._linkNodes(lastNode, newNode);
        }

        this._updateSize(true);
    }

    remove(value){
        let nodeBeforeTargetNode = this._traverseValues(value);
        let nodeAfterTargetNode = nodeBeforeTargetNode.getNext.getNext; 

        this._linkNodes(nodeBeforeTargetNode, nodeAfterTargetNode); // disconnects target node from list

        this._updateSize(false);
    }

    insert(value, targetValue){
        let newNode = this._createNewNode(value);

        if(this.head.getNext === this.tail){ // if the first node doesn't exist
            this._linkNodes(this.head, newNode);
        }
        else{
            let nodeBeforeTargetNode = this._traverseValues(targetValue);  
            let targetNode = nodeBeforeTargetNode.getNext;
            let nodeAfterTargetNode = targetNode.getNext;

            this._linkNodes(targetNode, newNode);
            this._linkNodes(newNode, nodeAfterTargetNode);
        }
        this._updateSize(true);
    }

    peek(index){
        let counter = 0;
        let currentNode = this.head.getNext; // current node is the first node (after dummy head)

        while(counter !== index & currentNode.next !== this.tail){
            currentNode = currentNode.getNext;
            counter += 1;
        }

        if(counter === index){ // only return current if index is found (not if it reached the end of list)
            return currentNode.getValue;
        }
    }

    print(){
        let currentNode = this.head;
        let printedList = "head->";
        
        while(currentNode.getNext !== this.tail){
            currentNode = currentNode.getNext;
            printedList = printedList + currentNode.getValue + "->";
        }

        printedList = printedList + "null";
        console.log(printedList);
    }
}
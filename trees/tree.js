import {TreeNode} from "./tree-node.js"

export class Tree{
    constructor(){
        this.root = this._createNewNode(null);
        this.height = 0;
    }

    get getRoot(){
        return this.root;
    }

    get getHeight(){
        return this.height;
    }

    _createNewNode(value = null){
        return new TreeNode(value, null, null);
    }

    _linkNodes(firstNode, secondNode){
        firstNode = secondNode;
    }

    _deleteNode(targetNode){
        
    }

    _updateHeight(){
        this.height = this.height + 1;
    }

    _traverseValues(){
    }
}
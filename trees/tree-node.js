export class TreeNode{
    constructor(value, right, left){
        this.value = value;
        this.left = right;
        this.right = left;
    }

    set setValue(value){
        this.value = value;
    }

    set setRight(Right){
        this.right = Right;
    }

    set setLeft(Left){
        this.left = Left;
    }

    get getValue(){
        return this.value;
    }

    get getRight(){
        return this.right;
    }

    get getLeft(){
        return this.left;
    }
}

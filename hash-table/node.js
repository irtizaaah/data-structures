export class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }

    set setValue(value){
        this.value = value;
    }
    set setNext(next){
        this.next = next;
    }
    get getValue(){
        return this.value;
    }
    get getNext(){
        return this.next;
    }
}
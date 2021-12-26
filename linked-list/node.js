export class Node{
    constructor(value, next, previous){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }

    set setValue(value){
        this.value = value;
    }

    set setNext(next){
        this.next = next;
    }

    set setPrevious(previous){
        this.previous = previous;
    }

    get getValue(){
        return this.value;
    }

    get getNext(){
        return this.next;
    }

    get getPrevious(){
        return this.previous;
    }
}

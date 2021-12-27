export class Queue{
    constructor(list){
        this.list = [];

        if(list !== null){
            for(let i = 0; i < list.length-1; i++){ // fill up queue
                this.enqueue(list[i]);
            }
        }
        this.front = 0; // the front points to the first element of the list
        this.rear = this.list.length - 1; // the rear points to the last element of the list
    }

    get getSize(){
        return this.list.length;
    }

    enqueue(value){
        this.list.push(value);
    }

    dequeue(){
        return this.list.shift();
    }

    peek(){
        return this.list[this.front];
    }

    print(){
        let printedList = "Front->[";
        
        for(let i = 0; i < this.list.length; i++){
            printedList = printedList + this.list[i];
            
            if(i !== this.list.length-1){
                printedList = printedList + ", ";
            }
        }

        printedList = printedList + "]<-Rear";
        console.log(printedList);
    }
}

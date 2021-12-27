export class Stack{
    constructor(list){
        this.list = [];

        if(list !== null){
            for(let i = 0; i < list.length; i++){ // fill up stack
                this.push(list[i]);
            }
        }
        this.top = this.list.length - 1; // the top points to the last element on the list
    }

    get getSize(){
        return this.list.length;
    }

    push(value){
        this.list.push(value);
    }

    pop(){
        return this.list.pop();
    }

    peek(){
        return this.list[this.top];
    }

    print(){
        let printedList = "Top->[";
        
        for(let i = this.list.length-1; i > 0; i--){
            printedList = printedList + this.list[i];
            
            if(i !== 1){
                printedList = printedList + ", ";
            }
        }

        printedList = printedList + "]";
        console.log(printedList);
    }
}
 class Stack {
     constructor(value){
         this.root = null;
         this.length = 0;
     }

     isEmpty(){
         return this.length === 0;
     }

    size(){
        return this.length;
    }

    push(value){
        let oldFirst = this.root;
        this.root = new Node(value);
        this.root.next = oldFirst;
        this.length++;
    }

    pop(){
        if (this.isEmpty()){
            return null;
        }
        let oldFirst = this.root;
        this.root = this.root.next;
        this.length--;
        return oldFirst.value;


    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let stack = new Stack();
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);



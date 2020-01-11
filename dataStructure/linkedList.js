class Node{

    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    addToHead(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        if(this.head){
            this.head.previous = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
    }

    addToTail(value){
        const newNode = new Node(value);
        newNode.previous = this.tail;
        if(this.head){
            this.tail.next = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    print(){
        let ar = [];
        let newNode = this.head;
        while(newNode){
            ar.push(newNode.value);
            newNode = newNode.next;
        }
        return ar;
    }

    deletedHead(){
        if (!this.head){
            return null;
        }
        this.head = this.head.next;
        if (this.head) {
            this.head.previous = null;
        }
        else {
            this.tail = null;
        }
        this.length--;
    }

    deletedTail(){
       if(!this.tail){
           return null
       }
       this.tail = this.tail.previous;
       if(this.tail){
           this.tail.next = null;
       }
       else {
           this.head = null;
       }
       this.length--;
    }

    search(value){
        let currentNode = this.head;
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}

const linkedList = new LinkedList();
linkedList.addToHead(5);
linkedList.addToTail(4);
console.log(linkedList.print());
linkedList.addToHead(3);
console.log(linkedList.print());
linkedList.deletedTail();
console.log(linkedList.print())
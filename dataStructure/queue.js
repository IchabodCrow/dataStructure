class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    isEmpty() {
        return this.first == null   // ---> Проверка на то, пустая ли очередь, если равенство true, то пустая
    }

    size() {
        return this.length;     // ---> Возвращаем длину очереди
    }

    enQueue(value) {     // ---> Добавление элемента в очередь
        const newNode = new QueueNode(value);
        let oldLast = this.last;        // ---> Перезаписываем старую очередь с целью сохранить ее
        this.last = newNode;            // ---> Кладем в нашу очередь новую ноду

        if(this.isEmpty()) {            // ---> Если очередь пустая, то первый элемент и последний являются элементом который только что вошел
            this.first = this.last;
        } else {
            oldLast.next = this.last;   // ---> Иначе
        }

        this.length++;
    }

    deQueue() {     // ---> Удаление элемента из очереди
        if(this.isEmpty()) {
            this.last = null;
            return null;
        }

        let itemValue = this.first.value;
        this.first = this.first.next;

        this.length--;

        return itemValue;
    }
}

const queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.deQueue();
console.log(queue);
queue.enQueue(3);
queue.enQueue(34);
queue.enQueue(15);
queue.enQueue(16);
queue.deQueue();
console.log(queue);
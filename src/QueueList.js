import { LinkedList } from './LinkedList';

export class QueueList {
    constructor() {
        this.list = new LinkedList();
    }

    get length() {
        return this.list.length;
    }

    enqueue(item) {
        this.list.addItem(item);
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.list.removeFirstItem();
        } else {
            throw new Error('Cannot perform the dequeue operation, the Queue is empty');
        }
    }

    isEmpty() {
        return this.list.length == 0;
    }

    peek() {
        return this.list.getFirstItem();
    }

    map(callback) {
        this.list.map(callback);
    }

    toArray() {
        return this.list.toArray();
    }
}
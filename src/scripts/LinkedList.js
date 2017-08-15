import { LinkedListNode } from './common/LinkedListNode';

export class LinkedList {
	constructor() {
		this.start = null;
		this.last = null;
		this.length = 0;
	}

	addItem(itemValue) {
		// List is empty
		let newNode = new LinkedListNode();
		newNode.data = itemValue;
		newNode.next = null;

		if (this.start == null) {
			this.start = newNode;
		} else {
			this.last.next = newNode;
		}
		this.last = newNode;
		this.length++;
	}

	map(callback) {
		let currentNode = this.start;
		let index = 0;
		while(currentNode !== null) {
			if(callback.length == 2) {
				callback(index, currentNode.data);
			} else {
				callback(currentNode.data);
			}
			currentNode = currentNode.next;
			index++;
		}
	}
}
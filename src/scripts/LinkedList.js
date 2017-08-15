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

	addItemAtStart(itemValue) {
		let newNode = new LinkedListNode();
		newNode.data = itemValue;
		newNode.next = null;

		if (this.start == null) {
			this.start = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.start;
			this.start = newNode;
		}
		this.length++;
	}

	addItemAtIndex(index, data) {
		if (index > this.length) {
			throw new Error('Index greater than the length of List');
		} else if (index == this.length) {
			this.addItem(data);
		} else if (index == 0) {
			this.addItemAtStart(data);
		} else {
			let newNode = new LinkedListNode();
			newNode.data = data;
			newNode.next = null;
			let currentNode = this.start;
			let currentIndex = 0;
			while (currentIndex < index - 1) {
				currentNode = currentNode.next;
				currentIndex++;
			}
			let nextNode = currentNode.next;
			currentNode.next = newNode;
			newNode.next = nextNode;
			this.length++;
		}
	}

	getLastItem() {
		return this.last && this.last.data;
	}

	getFirstItem() {
		return this.start && this.start.data;
	}

	getItemAtIndex(index) {
		if (index >= this.length) {
			throw new Error('Index greater than the length of List');
		}
		if (index == this.length - 1) {
			return this.getLastItem();
		}
		if (index == 0) {
			return this.getFirstItem();
		}
		let currentNode = this.start;
		let currentIndex = 0;
		while (currentIndex < index) {
			currentNode = currentNode.next;
			currentIndex++;
		}
		return currentNode.data;
	}

	map(callback) {
		let currentNode = this.start;
		let index = 0;
		while (currentNode !== null) {
			if (callback.length == 2) {
				callback(index, currentNode.data);
			} else {
				callback(currentNode.data);
			}
			currentNode = currentNode.next;
			index++;
		}
	}

	toArray() {
		let listArray = [];
		this.map((value) => {
			listArray.push(value);
		})
		return listArray;
	}
}
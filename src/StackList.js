import { LinkedList } from './LinkedList';

export class StackList {
	constructor() {
		this.list = new LinkedList();
	}

	get length() {
		return this.list.length;
	}

	push(item) {
		this.list.addItem(item);
	}

	pop() {
		if (!this.isEmpty()) {
			let popElement = this.list.getLastItem();
			this.list.removeLastItem();
			return popElement;
		}
		throw new Error('Cannot perform the pop operation, the stack is empty')
	}

	peek() {
		return this.list.getLastItem();
	}

	isEmpty() {
		return this.list.length == 0;
	}

	map(callback) {
		this.list.map(callback);
	}

	toArray() {
		return this.list.toArray();
	}
}
import { LinkedListNode } from './common/LinkedListNode';
/**
 * 
 * 
 * @class _LinkedList
 */
export class LinkedList {
  /**
   * Creates an instance of LinkedList.
   * @memberof LinkedList
   */
  constructor() {
    let _start = null;
    let _last = null;
    let _length = 0;

    this.getStart = () => _start;
    this.setStart = start => _start = start;

    this.getLast = () => _last;
    this.setLast = last => _last = last;

    this.getLength = () => _length;
    this.setLength = length => _length = length;
  }

  /**
   * The length of the linked list
   * 
   * @readonly
   * @memberof LinkedList
   */
  get length() {
    return this.getLength();
  }

  /**
   * Adds a new item in the tail of linked list
   * 
   * @param {any} itemValue Item to be added
   * @returns {void} 
   * @memberof LinkedList
   */
  addItem(itemValue) {
    let newNode = new LinkedListNode();
    newNode.data = itemValue;
    newNode.next = null;

    if (this.getStart() == null) {
      this.setStart(newNode);
    } else {
      this.getLast().next = newNode;
    }
    this.setLast(newNode);
    this.setLength(this.getLength() + 1);
  }

  /**
   * Adds an item at the head of the linked list
   * 
   * @param {any} itemValue Item to be added
   * @returns {void}
   * @memberof LinkedList
   */
  addItemAtStart(itemValue) {
    let newNode = new LinkedListNode();
    newNode.data = itemValue;
    newNode.next = null;

    if (this.getStart() == null) {
      this.setStart(newNode);
      this.setLast(newNode);
    } else {
      newNode.next = this.getStart();
      this.setStart(newNode);
    }
    this.setLength(this.getLength() + 1);
  }

  /**
   * Adds an item in the linked list at the given index
   * 
   * @param {number} index Index
   * @param {any} data Item to be added
   * @returns {void}
   * @memberof LinkedList
   */
  addItemAtIndex(index, data) {
    if (index > this.getLength()) {
      throw new Error('Index greater than the length of List');
    } else if (index == this.getLength()) {
      this.addItem(data);
    } else if (index == 0) {
      this.addItemAtStart(data);
    } else {
      let newNode = new LinkedListNode();
      newNode.data = data;
      newNode.next = null;
      let currentNode = this.getStart();
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      let nextNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextNode;
      this.setLength(this.getLength() + 1);
    }
  }

  /**
   * Gets the last item of the linked list
   * 
   * @returns {any} The last item
   * @memberof LinkedList
   */
  getLastItem() {
    return this.getLast() && this.getLast().data;
  }

  /**
   * Gets the first item of the linked list
   * 
   * @returns {any} The first item
   * @memberof LinkedList
   */
  getFirstItem() {
    return this.getStart() && this.getStart().data;
  }

  /**
   * Gets an item from the linked list at the given index
   * 
   * @param {number} index Index
   * @returns {any} The item
   * @memberof LinkedList
   */
  getItemAtIndex(index) {
    if (index >= this.getLength()) {
      throw new Error('Index greater than the length of List');
    }
    if (index == this.getLength() - 1) {
      return this.getLastItem();
    }
    if (index == 0) {
      return this.getFirstItem();
    }
    let currentNode = this.getStart();
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode.data;
  }

  /**
   * Removes the first item from the linked list
   * 
   * @returns {void}
   * @memberof LinkedList
   */
  removeFirstItem() {
    if (this.getStart() == null) {
      throw new Error('Cannot remove element from an empty List');
    }
    if (this.getLength() == 1) {
      this.setStart(null); this.setLast(null);
      this.setLength(0);
    } else {
      this.setStart(this.getStart().next);
      this.setLength(this.getLength() - 1);
    }
  }

  /**
   * Removes the last item from the linked list
   * 
   * @returns {void}
   * @memberof LinkedList
   */
  removeLastItem() {
    this.removeItemAtIndex(this.getLength() - 1);
  }

  /**
   * Removes an item at the given index of linked list
   * 
   * @param {number} index 
   * @returns {void}
   * @memberof LinkedList
   */
  removeItemAtIndex(index) {
    if (index >= this.getLength()) {
      throw new Error('Index greater than the length of List');
    }
    if (index == 0) {
      this.removeFirstItem();
    } else {
      let currentNode = this.getStart();
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      let deleteNode = currentNode.next;
      currentNode.next = deleteNode.next;
      if (index == this.getLength() - 1) {
        this.setLast(currentNode);
      }
      this.setLength(this.getLength() - 1);
    }
  }

  /**
   * Updates an item of the linked list
   * 
   * @param {number} index The index
   * @param {any} value New value
   * @returns {void}
   * @memberof LinkedList
   */
  updateItem(index, value) {
    if (index >= this.getLength()) {
      throw new Error('Index greater than the length of List');
    }
    let currentNode = this.getStart();
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    currentNode.data = value;
  }

  /**
   * Map function for the linked list
   * 
   * @param {Function} callback 
   * @returns {void}
   * @memberof LinkedList
   */
  map(callback) {
    let currentNode = this.getStart();
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

  /**
   * Returns the linked list in the form of an array
   * 
   * @returns {any[]} The linked list as an array
   * @memberof LinkedList
   */
  toArray() {
    let listArray = [];
    this.map((value) => {
      listArray.push(value);
    })
    return listArray;
  }
}

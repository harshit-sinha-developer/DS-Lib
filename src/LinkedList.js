import { LinkedListNode } from './common/LinkedListNode';
/**
 * Wraps up _LinkedList as LinkedList class
 * Provides private members to _LinkedList Class
 * 
 * @class LinkedList
 */
export const LinkedList = (function () {
  // Private members
  let _start;
  let _last;
  let _length;

  /**
   * 
   * 
   * @class _LinkedList
   */
  class _LinkedList {
    /**
     * Creates an instance of _LinkedList.
     * @memberof _LinkedList
     */
    constructor() {
      _start = null;
      _last = null;
      _length = 0;
    }

    /**
     * The length of the linked list
     * 
     * @readonly
     * @memberof _LinkedList
     */
    get length() {
      return _length;
    }

    /**
     * Adds a new item in the tail of linked list
     * 
     * @param {any} itemValue Item to be added
     * @returns {void} 
     * @memberof _LinkedList
     */
    addItem(itemValue) {
      let newNode = new LinkedListNode();
      newNode.data = itemValue;
      newNode.next = null;

      if (_start == null) {
        _start = newNode;
      } else {
        _last.next = newNode;
      }
      _last = newNode;
      _length++;
    }

    /**
     * Adds an item at the head of the linked list
     * 
     * @param {any} itemValue Item to be added
     * @returns {void}
     * @memberof _LinkedList
     */
    addItemAtStart(itemValue) {
      let newNode = new LinkedListNode();
      newNode.data = itemValue;
      newNode.next = null;

      if (_start == null) {
        _start = newNode;
        _last = newNode;
      } else {
        newNode.next = _start;
        _start = newNode;
      }
      _length++;
    }

    /**
     * Adds an item in the linked list at the given index
     * 
     * @param {number} index Index
     * @param {any} data Item to be added
     * @returns {void}
     * @memberof _LinkedList
     */
    addItemAtIndex(index, data) {
      if (index > _length) {
        throw new Error('Index greater than the length of List');
      } else if (index == _length) {
        this.addItem(data);
      } else if (index == 0) {
        this.addItemAtStart(data);
      } else {
        let newNode = new LinkedListNode();
        newNode.data = data;
        newNode.next = null;
        let currentNode = _start;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }
        let nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        _length++;
      }
    }

    /**
     * Gets the last item of the linked list
     * 
     * @returns {any} The last item
     * @memberof _LinkedList
     */
    getLastItem() {
      return _last && _last.data;
    }

    /**
     * Gets the first item of the linked list
     * 
     * @returns {any} The first item
     * @memberof _LinkedList
     */
    getFirstItem() {
      return _start && _start.data;
    }

    /**
     * Gets an item from the linked list at the given index
     * 
     * @param {number} index Index
     * @returns {any} The item
     * @memberof _LinkedList
     */
    getItemAtIndex(index) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      if (index == _length - 1) {
        return this.getLastItem();
      }
      if (index == 0) {
        return this.getFirstItem();
      }
      let currentNode = _start;
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
     * @memberof _LinkedList
     */
    removeFirstItem() {
      if (_start == null) {
        throw new Error('Cannot remove element from an empty List');
      }
      if (_length == 1) {
        _start = _last = null;
        _length = 0;
      } else {
        _start = _start.next;
        _length--;
      }
    }

    /**
     * Removes the last item from the linked list
     * 
     * @returns {void}
     * @memberof _LinkedList
     */
    removeLastItem() {
      this.removeItemAtIndex(_length - 1);
    }

    /**
     * Removes an item at the given index of linked list
     * 
     * @param {number} index 
     * @returns {void}
     * @memberof _LinkedList
     */
    removeItemAtIndex(index) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      if (index == 0) {
        this.removeFirstItem();
      } else {
        let currentNode = _start;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }
        let deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
        if (index == _length - 1) {
          _last = currentNode;
        }
        _length--;
      }
    }

    /**
     * Updates an item of the linked list
     * 
     * @param {number} index The index
     * @param {any} value New value
     * @returns {void}
     * @memberof _LinkedList
     */
    updateItem(index, value) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      let currentNode = _start;
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
     * @memberof _LinkedList
     */
    map(callback) {
      let currentNode = _start;
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
     * @memberof _LinkedList
     */
    toArray() {
      let listArray = [];
      this.map((value) => {
        listArray.push(value);
      })
      return listArray;
    }
  }
  return _LinkedList;
})();
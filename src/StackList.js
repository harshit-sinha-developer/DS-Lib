import { LinkedList } from './LinkedList';

/**
 * StackList Class
 * 
 * @export
 * @class StackList
 */
export class StackList {
  /**
   * Creates an instance of StackList.
   * @memberof StackList
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * The length of the Stack
   * 
   * @readonly
   * @memberof StackList
   */
  get length() {
    return this.list.length;
  }

  /**
   * Adds an item into the stack, performs push operation on stack
   * 
   * @param {any} item	Item to push into stack
   * @returns {void}
   * @memberof StackList
   */
  push(item) {
    this.list.addItem(item);
  }

  /**
   * Removes the top item from the stack, performs pop operation on stack
   * 
   * @returns {any}	The top element of stack
   * @memberof StackList
   */
  pop() {
    if (!this.isEmpty()) {
      let popElement = this.list.getLastItem();
      this.list.removeLastItem();
      return popElement;
    }
    throw new Error('Cannot perform the pop operation, the stack is empty')
  }

  /**
   * Returns the top element of the stack
   * 
   * @returns {any} The top element of stack
   * @memberof StackList
   */
  peek() {
    return this.list.getLastItem();
  }

  /**
   * Checks if the stack is empty
   * 
   * @returns {boolean} True if stack is empty, false otherwise
   * @memberof StackList
   */
  isEmpty() {
    return this.list.length == 0;
  }

  /**
   * Map function on the stack used to iterate each element
   * 
   * @param {Function} callback 
   * @returns {void} 
   * @memberof StackList
   */
  map(callback) {
    this.list.map(callback);
  }

  /**
   * Returns the stack as an array
   * 
   * @returns {any[]} 
   * @memberof StackList
   */
  toArray() {
    return this.list.toArray();
  }
}
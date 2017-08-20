import { LinkedList } from './LinkedList';

/**
 * QueueList class
 * 
 * @export
 * @class QueueList
 */
export class QueueList {
  /**
   * Creates an instance of QueueList.
   * @memberof QueueList
   */
  constructor() {
    this.list = new LinkedList();
  }

  /**
   * The length of queue
   * 
   * @readonly
   * @memberof QueueList
   */
  get length() {
    return this.list.length;
  }

  /**
   * Inserts an element in the tail of queue
   * 
   * @param {any} item 
   * @returns {void}
   * @memberof QueueList
   */
  enqueue(item) {
    this.list.addItem(item);
  }

  /**
   * Removes an element from the head of queue
   * 
   * @returns {any} The Head of queue
   * @memberof QueueList
   */
  dequeue() {
    if (!this.isEmpty()) {
      return this.list.removeFirstItem();
    } else {
      throw new Error('Cannot perform the dequeue operation, the Queue is empty');
    }
  }

  /**
   * Checks if the queue is empty
   * 
   * @returns {boolean} True if queue is empty, false otherwise
   * @memberof QueueList
   */
  isEmpty() {
    return this.list.length == 0;
  }

  /**
   * Returns the head element of queue, without removing it
   * 
   * @returns {any} The head element of queue
   * @memberof QueueList
   */
  peek() {
    return this.list.getFirstItem();
  }

  /**
   * Map function on the queue used to iterate each element
   * 
   * @param {Function} callback 
   * @returns {void}
   * @memberof QueueList
   */
  map(callback) {
    this.list.map(callback);
  }

  /**
   * Returns the queue in the form of an array
   * 
   * @returns {any[]} The queue in array form
   * @memberof QueueList
   */
  toArray() {
    return this.list.toArray();
  }
}
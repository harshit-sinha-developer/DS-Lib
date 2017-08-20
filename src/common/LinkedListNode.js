import { Node } from './DsNode';

/**
 * LinkedListNode class
 * 
 * @export
 * @class LinkedListNode
 * @extends {Node}
 */
export class LinkedListNode extends Node {
  /**
   * Creates an instance of LinkedListNode.
   * @memberof LinkedListNode
   */
  constructor() {
    super();
    this.next = null;
  }
} 
import { LinkedListNode } from './common/LinkedListNode';
export const LinkedList = (function() {
    // Private members
    let _start;
    let _last;
    let _length;

    class _LinkedList {
        constructor() {
            _start = null;
            _last = null;
            _length = 0;
        }

        get length() {
            return _length;
        }

        addItem(itemValue) {
            // List is empty
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

        getLastItem() {
            return _last && _last.data;
        }

        getFirstItem() {
            return _start && _start.data;
        }

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

        removeLastItem() {
            this.removeItemAtIndex(_length - 1);
        }

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
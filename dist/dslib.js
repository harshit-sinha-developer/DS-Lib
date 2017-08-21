(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DsLib"] = factory();
	else
		root["DsLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedListNode = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Wraps up _LinkedList as LinkedList class
 * Provides private members to _LinkedList Class
 * 
 * @class LinkedList
 */
var LinkedList = exports.LinkedList = function () {
  // Private members
  var _start = void 0;
  var _last = void 0;
  var _length = void 0;

  /**
   * 
   * 
   * @class _LinkedList
   */

  var _LinkedList = function () {
    /**
     * Creates an instance of _LinkedList.
     * @memberof _LinkedList
     */
    function _LinkedList() {
      _classCallCheck(this, _LinkedList);

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


    /**
     * Adds a new item in the tail of linked list
     * 
     * @param {any} itemValue Item to be added
     * @returns {void} 
     * @memberof _LinkedList
     */
    _LinkedList.prototype.addItem = function addItem(itemValue) {
      var newNode = new _LinkedListNode.LinkedListNode();
      newNode.data = itemValue;
      newNode.next = null;

      if (_start == null) {
        _start = newNode;
      } else {
        _last.next = newNode;
      }
      _last = newNode;
      _length++;
    };

    /**
     * Adds an item at the head of the linked list
     * 
     * @param {any} itemValue Item to be added
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.addItemAtStart = function addItemAtStart(itemValue) {
      var newNode = new _LinkedListNode.LinkedListNode();
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
    };

    /**
     * Adds an item in the linked list at the given index
     * 
     * @param {number} index Index
     * @param {any} data Item to be added
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.addItemAtIndex = function addItemAtIndex(index, data) {
      if (index > _length) {
        throw new Error('Index greater than the length of List');
      } else if (index == _length) {
        this.addItem(data);
      } else if (index == 0) {
        this.addItemAtStart(data);
      } else {
        var newNode = new _LinkedListNode.LinkedListNode();
        newNode.data = data;
        newNode.next = null;
        var currentNode = _start;
        var currentIndex = 0;
        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }
        var nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        _length++;
      }
    };

    /**
     * Gets the last item of the linked list
     * 
     * @returns {any} The last item
     * @memberof _LinkedList
     */


    _LinkedList.prototype.getLastItem = function getLastItem() {
      return _last && _last.data;
    };

    /**
     * Gets the first item of the linked list
     * 
     * @returns {any} The first item
     * @memberof _LinkedList
     */


    _LinkedList.prototype.getFirstItem = function getFirstItem() {
      return _start && _start.data;
    };

    /**
     * Gets an item from the linked list at the given index
     * 
     * @param {number} index Index
     * @returns {any} The item
     * @memberof _LinkedList
     */


    _LinkedList.prototype.getItemAtIndex = function getItemAtIndex(index) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      if (index == _length - 1) {
        return this.getLastItem();
      }
      if (index == 0) {
        return this.getFirstItem();
      }
      var currentNode = _start;
      var currentIndex = 0;
      while (currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      return currentNode.data;
    };

    /**
     * Removes the first item from the linked list
     * 
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.removeFirstItem = function removeFirstItem() {
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
    };

    /**
     * Removes the last item from the linked list
     * 
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.removeLastItem = function removeLastItem() {
      this.removeItemAtIndex(_length - 1);
    };

    /**
     * Removes an item at the given index of linked list
     * 
     * @param {number} index 
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.removeItemAtIndex = function removeItemAtIndex(index) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      if (index == 0) {
        this.removeFirstItem();
      } else {
        var currentNode = _start;
        var currentIndex = 0;
        while (currentIndex < index - 1) {
          currentNode = currentNode.next;
          currentIndex++;
        }
        var deleteNode = currentNode.next;
        currentNode.next = deleteNode.next;
        if (index == _length - 1) {
          _last = currentNode;
        }
        _length--;
      }
    };

    /**
     * Updates an item of the linked list
     * 
     * @param {number} index The index
     * @param {any} value New value
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.updateItem = function updateItem(index, value) {
      if (index >= _length) {
        throw new Error('Index greater than the length of List');
      }
      var currentNode = _start;
      var currentIndex = 0;
      while (currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.data = value;
    };

    /**
     * Map function for the linked list
     * 
     * @param {Function} callback 
     * @returns {void}
     * @memberof _LinkedList
     */


    _LinkedList.prototype.map = function map(callback) {
      var currentNode = _start;
      var index = 0;
      while (currentNode !== null) {
        if (callback.length == 2) {
          callback(index, currentNode.data);
        } else {
          callback(currentNode.data);
        }
        currentNode = currentNode.next;
        index++;
      }
    };

    /**
     * Returns the linked list in the form of an array
     * 
     * @returns {any[]} The linked list as an array
     * @memberof _LinkedList
     */


    _LinkedList.prototype.toArray = function toArray() {
      var listArray = [];
      this.map(function (value) {
        listArray.push(value);
      });
      return listArray;
    };

    _createClass(_LinkedList, [{
      key: 'length',
      get: function get() {
        return _length;
      }
    }]);

    return _LinkedList;
  }();

  return _LinkedList;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinkedList = __webpack_require__(0);

Object.defineProperty(exports, 'LinkedList', {
  enumerable: true,
  get: function get() {
    return _LinkedList.LinkedList;
  }
});

var _QueueList = __webpack_require__(4);

Object.defineProperty(exports, 'QueueList', {
  enumerable: true,
  get: function get() {
    return _QueueList.QueueList;
  }
});

var _StackList = __webpack_require__(5);

Object.defineProperty(exports, 'StackList', {
  enumerable: true,
  get: function get() {
    return _StackList.StackList;
  }
});

var _HashSet = __webpack_require__(6);

Object.defineProperty(exports, 'Set', {
  enumerable: true,
  get: function get() {
    return _HashSet.Set;
  }
});

var _Dictionary = __webpack_require__(7);

Object.defineProperty(exports, 'Dictionary', {
  enumerable: true,
  get: function get() {
    return _Dictionary.Dictionary;
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedListNode = undefined;

var _DsNode = __webpack_require__(3);

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

/**
 * LinkedListNode class
 * 
 * @export
 * @class LinkedListNode
 * @extends {Node}
 */
var LinkedListNode = exports.LinkedListNode = function (_Node) {
  _inherits(LinkedListNode, _Node);

  /**
   * Creates an instance of LinkedListNode.
   * @memberof LinkedListNode
   */
  function LinkedListNode() {
    _classCallCheck(this, LinkedListNode);

    var _this = _possibleConstructorReturn(this, _Node.call(this));

    _this.next = null;
    return _this;
  }

  return LinkedListNode;
}(_DsNode.Node);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Node class
 * 
 * @export
 * @class Node
 */
var Node =
/**
 * Creates an instance of Node.
 * @memberof Node
 */
exports.Node = function Node() {
  _classCallCheck(this, Node);

  this.data = null;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * QueueList class
 * 
 * @export
 * @class QueueList
 */
var QueueList = exports.QueueList = function () {
  /**
   * Creates an instance of QueueList.
   * @memberof QueueList
   */
  function QueueList() {
    _classCallCheck(this, QueueList);

    this.list = new _LinkedList.LinkedList();
  }

  /**
   * The length of queue
   * 
   * @readonly
   * @memberof QueueList
   */


  /**
   * Inserts an element in the tail of queue
   * 
   * @param {any} item 
   * @returns {void}
   * @memberof QueueList
   */
  QueueList.prototype.enqueue = function enqueue(item) {
    this.list.addItem(item);
  };

  /**
   * Removes an element from the head of queue
   * 
   * @returns {any} The Head of queue
   * @memberof QueueList
   */


  QueueList.prototype.dequeue = function dequeue() {
    if (!this.isEmpty()) {
      return this.list.removeFirstItem();
    } else {
      throw new Error('Cannot perform the dequeue operation, the Queue is empty');
    }
  };

  /**
   * Checks if the queue is empty
   * 
   * @returns {boolean} True if queue is empty, false otherwise
   * @memberof QueueList
   */


  QueueList.prototype.isEmpty = function isEmpty() {
    return this.list.length == 0;
  };

  /**
   * Returns the head element of queue, without removing it
   * 
   * @returns {any} The head element of queue
   * @memberof QueueList
   */


  QueueList.prototype.peek = function peek() {
    return this.list.getFirstItem();
  };

  /**
   * Map function on the queue used to iterate each element
   * 
   * @param {Function} callback 
   * @returns {void}
   * @memberof QueueList
   */


  QueueList.prototype.map = function map(callback) {
    this.list.map(callback);
  };

  /**
   * Returns the queue in the form of an array
   * 
   * @returns {any[]} The queue in array form
   * @memberof QueueList
   */


  QueueList.prototype.toArray = function toArray() {
    return this.list.toArray();
  };

  _createClass(QueueList, [{
    key: 'length',
    get: function get() {
      return this.list.length;
    }
  }]);

  return QueueList;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StackList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * StackList Class
 * 
 * @export
 * @class StackList
 */
var StackList = exports.StackList = function () {
  /**
   * Creates an instance of StackList.
   * @memberof StackList
   */
  function StackList() {
    _classCallCheck(this, StackList);

    this.list = new _LinkedList.LinkedList();
  }

  /**
   * The length of the Stack
   * 
   * @readonly
   * @memberof StackList
   */


  /**
   * Adds an item into the stack, performs push operation on stack
   * 
   * @param {any} item	Item to push into stack
   * @returns {void}
   * @memberof StackList
   */
  StackList.prototype.push = function push(item) {
    this.list.addItem(item);
  };

  /**
   * Removes the top item from the stack, performs pop operation on stack
   * 
   * @returns {any}	The top element of stack
   * @memberof StackList
   */


  StackList.prototype.pop = function pop() {
    if (!this.isEmpty()) {
      var popElement = this.list.getLastItem();
      this.list.removeLastItem();
      return popElement;
    }
    throw new Error('Cannot perform the pop operation, the stack is empty');
  };

  /**
   * Returns the top element of the stack
   * 
   * @returns {any} The top element of stack
   * @memberof StackList
   */


  StackList.prototype.peek = function peek() {
    return this.list.getLastItem();
  };

  /**
   * Checks if the stack is empty
   * 
   * @returns {boolean} True if stack is empty, false otherwise
   * @memberof StackList
   */


  StackList.prototype.isEmpty = function isEmpty() {
    return this.list.length == 0;
  };

  /**
   * Map function on the stack used to iterate each element
   * 
   * @param {Function} callback 
   * @returns {void} 
   * @memberof StackList
   */


  StackList.prototype.map = function map(callback) {
    this.list.map(callback);
  };

  /**
   * Returns the stack as an array
   * 
   * @returns {any[]} 
   * @memberof StackList
   */


  StackList.prototype.toArray = function toArray() {
    return this.list.toArray();
  };

  _createClass(StackList, [{
    key: 'length',
    get: function get() {
      return this.list.length;
    }
  }]);

  return StackList;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.Set = Set;
function Set() {
	var set = {};
	this.add = function (element) {
		if (set[element] != undefined || typeof element == "undefined" || typeof element == "function") {
			return false;
		} else if ((typeof element === "undefined" ? "undefined" : _typeof(element)) == "object" && element != null) {
			set[JSON.stringify(element)] = "object";
		} else set[element] = typeof element === "undefined" ? "undefined" : _typeof(element);
		return true;
	};

	this.testSet = function () {
		return set;
	};

	this.remove = function (element) {
		if ((typeof element === "undefined" ? "undefined" : _typeof(element)) == "object" && element != null) {
			element = JSON.stringify(element);
		} else if (typeof set[element] == "undefined" || typeof element == "undefined" || typeof element == "function") {
			return false;
		}
		delete set[element];
		return true;
	};

	this.contains = function (element) {
		if (typeof set[element] == "undefined") {
			return false;
		}
		return true;
	};

	this.toArray = function () {
		var setArray = [];
		for (var i in set) {
			var iConverted = null;
			switch (set[i]) {
				case "number":
					iConverted = Number(i);
					break;
				case "string":
					iConverted = String(i);
					break;
				case "boolean":
					iConverted = Boolean(i);
					break;
				case "object":
					iConverted = JSON.parse(i);
					break;
			}
			setArray.push(iConverted);
		}
		return setArray;
	};
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = exports.Dictionary = function () {
  var _map = null;

  var _Dictionary = function () {
    function _Dictionary() {
      _classCallCheck(this, _Dictionary);

      _map = new Map();
    }

    _Dictionary.prototype.set = function set(key, value) {
      _map.set(key, value);
    };

    _Dictionary.prototype.get = function get(key) {
      return _map.get(key);
    };

    _Dictionary.prototype.keys = function keys() {
      var keys = [];
      _map.forEach(function (value, key) {
        keys.push(key);
      });
      return keys;
    };

    _Dictionary.prototype.values = function values() {
      var values = [];
      _map.forEach(function (value, key) {
        values.push(value);
      });
      return values;
    };

    _Dictionary.prototype.has = function has(key) {
      return _map.has(key);
    };

    _Dictionary.prototype.map = function map(callback) {
      if (callback.length == 1) {
        _map.forEach(function (value, key) {
          callback(value);
        });
      } else {
        _map.forEach(function (value, key) {
          callback(key, value);
        });
      }
    };

    _Dictionary.prototype.entries = function entries() {
      var entries = [];
      _map.forEach(function (value, key) {
        entries.push([key, value]);
      });
      return entries;
    };

    _Dictionary.prototype.delete = function _delete(key) {
      _map.delete(key);
    };

    _Dictionary.prototype.clear = function clear() {
      _map.clear();
    };

    _Dictionary.prototype.isEmpty = function isEmpty() {
      return _map.size === 0;
    };

    _createClass(_Dictionary, [{
      key: "size",
      get: function get() {
        return _map.size;
      }
    }]);

    return _Dictionary;
  }();

  return _Dictionary;
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=dslib.js.map
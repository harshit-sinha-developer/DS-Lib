var DsLib =
/******/ (function(modules) { // webpackBootstrap
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

var LinkedList = exports.LinkedList = function () {
	function LinkedList() {
		_classCallCheck(this, LinkedList);

		this.start = null;
		this.last = null;
		this.length = 0;
	}

	_createClass(LinkedList, [{
		key: 'addItem',
		value: function addItem(itemValue) {
			// List is empty
			var newNode = new _LinkedListNode.LinkedListNode();
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
	}, {
		key: 'addItemAtStart',
		value: function addItemAtStart(itemValue) {
			var newNode = new _LinkedListNode.LinkedListNode();
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
	}, {
		key: 'addItemAtIndex',
		value: function addItemAtIndex(index, data) {
			if (index > this.length) {
				throw new Error('Index greater than the length of List');
			} else if (index == this.length) {
				this.addItem(data);
			} else if (index == 0) {
				this.addItemAtStart(data);
			} else {
				var newNode = new _LinkedListNode.LinkedListNode();
				newNode.data = data;
				newNode.next = null;
				var currentNode = this.start;
				var currentIndex = 0;
				while (currentIndex < index - 1) {
					currentNode = currentNode.next;
					currentIndex++;
				}
				var nextNode = currentNode.next;
				currentNode.next = newNode;
				newNode.next = nextNode;
				this.length++;
			}
		}
	}, {
		key: 'getLastItem',
		value: function getLastItem() {
			return this.last && this.last.data;
		}
	}, {
		key: 'getFirstItem',
		value: function getFirstItem() {
			return this.start && this.start.data;
		}
	}, {
		key: 'getItemAtIndex',
		value: function getItemAtIndex(index) {
			if (index >= this.length) {
				throw new Error('Index greater than the length of List');
			}
			if (index == this.length - 1) {
				return this.getLastItem();
			}
			if (index == 0) {
				return this.getFirstItem();
			}
			var currentNode = this.start;
			var currentIndex = 0;
			while (currentIndex < index) {
				currentNode = currentNode.next;
				currentIndex++;
			}
			return currentNode.data;
		}
	}, {
		key: 'removeFirstItem',
		value: function removeFirstItem() {
			if (this.start == null) {
				throw new Error('Cannot remove element from an empty List');
			}
			if (this.length == 1) {
				this.start = this.last = null;
				this.length = 0;
			} else {
				this.start = this.start.next;
				this.length--;
			}
		}
	}, {
		key: 'removeLastItem',
		value: function removeLastItem() {
			this.removeItemAtIndex(this.length - 1);
		}
	}, {
		key: 'removeItemAtIndex',
		value: function removeItemAtIndex(index) {
			if (index >= this.length) {
				throw new Error('Index greater than the length of List');
			}
			if (index == 0) {
				this.removeFirstItem();
			} else {
				var currentNode = this.start;
				var currentIndex = 0;
				while (currentIndex < index - 1) {
					currentNode = currentNode.next;
					currentIndex++;
				}
				var deleteNode = currentNode.next;
				currentNode.next = deleteNode.next;
				if (index == this.length - 1) {
					this.last = currentNode;
				}
				this.length--;
			}
		}
	}, {
		key: 'updateItem',
		value: function updateItem(index, value) {
			if (index >= this.length) {
				throw new Error('Index greater than the length of List');
			}
			var currentNode = this.start;
			var currentIndex = 0;
			while (currentIndex < index) {
				currentNode = currentNode.next;
				currentIndex++;
			}
			currentNode.data = value;
		}
	}, {
		key: 'map',
		value: function map(callback) {
			var currentNode = this.start;
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
		}
	}, {
		key: 'toArray',
		value: function toArray() {
			var listArray = [];
			this.map(function (value) {
				listArray.push(value);
			});
			return listArray;
		}
	}]);

	return LinkedList;
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkedListNode = undefined;

var _DsNode = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkedListNode = exports.LinkedListNode = function (_Node) {
    _inherits(LinkedListNode, _Node);

    function LinkedListNode() {
        _classCallCheck(this, LinkedListNode);

        var _this = _possibleConstructorReturn(this, (LinkedListNode.__proto__ || Object.getPrototypeOf(LinkedListNode)).call(this));

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

var Node = exports.Node = function Node() {
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

var QueueList = exports.QueueList = function () {
    function QueueList() {
        _classCallCheck(this, QueueList);

        this.list = new _LinkedList.LinkedList();
    }

    _createClass(QueueList, [{
        key: 'enqueue',
        value: function enqueue(item) {
            this.list.addItem(item);
        }
    }, {
        key: 'dequeue',
        value: function dequeue() {
            if (!this.isEmpty()) {
                this.list.removeFirstItem();
            } else {
                throw new Error('Cannot perform the dequeue operation, the Queue is empty');
            }
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.list.length == 0;
        }
    }, {
        key: 'peek',
        value: function peek() {
            return this.list.getFirstItem();
        }
    }, {
        key: 'map',
        value: function map(callback) {
            this.list.map(callback);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            return this.list.toArray();
        }
    }, {
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

var StackList = exports.StackList = function () {
	function StackList() {
		_classCallCheck(this, StackList);

		this.list = new _LinkedList.LinkedList();
	}

	_createClass(StackList, [{
		key: 'push',
		value: function push(item) {
			this.list.addItem(item);
		}
	}, {
		key: 'pop',
		value: function pop() {
			if (!this.isEmpty()) {
				var popElement = this.list.getLastItem();
				this.list.removeLastItem();
				return popElement;
			}
			throw new Error('Cannot perform the pop operation, the stack is empty');
		}
	}, {
		key: 'peek',
		value: function peek() {
			return this.list.getLastItem();
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty() {
			return this.list.length == 0;
		}
	}, {
		key: 'map',
		value: function map(callback) {
			this.list.map(callback);
		}
	}, {
		key: 'toArray',
		value: function toArray() {
			return this.list.toArray();
		}
	}, {
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

/***/ })
/******/ ]);
//# sourceMappingURL=dslib.js.map
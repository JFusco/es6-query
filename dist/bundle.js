/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _es6Dom = __webpack_require__(1);

	var _es6Dom2 = _interopRequireDefault(_es6Dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var query = function query(node) {
		return new _es6Dom2.default(node);
	};

	query.dom = _es6Dom2.default.prototype = {
		addClass: function addClass(name) {
			if (this.length > 1) {
				var i = void 0;
				for (i = 0; i < this.length; i++) {
					if (!query(this[i]).hasClass(name)) {
						this[i].classList.add(name);
					}
				}
			} else {
				if (!query(this[0]).hasClass(name)) {
					this[0].classList.add(name);
				}
			}

			return this;
		},
		hasClass: function hasClass(name) {
			var nodeHasClass = false;

			if (this.length > 1) {
				var i = void 0;
				for (i = 0; i < this.length; i++) {
					if (this[i].classList.contains(name) === true) {
						nodeHasClass = true;

						break;
					}
				}
			} else {
				nodeHasClass = this[0].classList.contains(name);
			}

			return nodeHasClass;
		},


		removeClass: function removeClass(name) {
			if (this.length > 1) {
				var i = void 0;
				for (i = this.length - 1; i >= 0; i--) {
					if (query(this[i]).hasClass(name)) {
						this[i].classList.remove(name);
					}
				}
			} else {
				if (query(this[0]).hasClass(name)) {
					this[0].classList.remove(name);
				}
			}

			return this;
		},

		toggleClass: function toggleClass(name) {
			return this[0].classList.toggle(name);
		},
		remove: function remove() {
			if (this.length > 1) {
				var i = void 0;
				for (i = this.length - 1; i >= 0; i--) {
					this[i].parentNode.removeChild(this[i]);
				}
			} else {
				this[0].parentNode.removeChild(this[0]);
			}

			return this;
		},
		get: function get(index) {
			if (this.length === 1) {
				throw 'This method requires a nodeList. Please provide a class or tag.';
			}

			this[0] = this[index];

			this.length = 1;

			if (typeof this[0] === 'undefined') {
				throw 'Element does not exist, please check your index that you provided and children available.';
			}

			return this;
		},
		data: function data(name) {
			return this[0].getAttribute('data-' + name);
		}
	};

	exports.default = query;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DOM = function DOM(node) {
		(0, _classCallCheck3.default)(this, DOM);

		if (typeof node === 'undefined' || node === '') {
			throw 'You must define a class, id or a tag';
		}

		if (typeof node.nodeType !== 'undefined') {
			this[0] = node;

			this.length = 1;

			return this;
		}

		if (node === 'body' && document.body) {
			this[0] = document.getElementsByTagName('body')[0];

			this.length = 1;

			return this;
		}

		if (typeof node !== 'string') {
			this[0] = node;

			this.length = 1;

			return this;
		}

		var char = node.charAt(0);

		var nodes = null,
		    nodeLength = 0;

		if (char === '#') {
			this[0] = document.getElementById(node.substr(1));

			this.length = 1;

			return this;
		}

		if (char === '.') {
			nodes = document.querySelectorAll(node);
			nodeLength = nodes.length;

			var i = void 0;
			for (i = 0; i < nodeLength; i++) {
				this[i] = nodes[i];
			}

			this.length = nodes.length;

			return this;
		}

		if (typeof this[0] === 'undefined') {
			nodes = document.getElementsByTagName(node);
			nodeLength = nodes.length;

			var y = void 0;
			for (y = 0; y < nodeLength; y++) {
				this[y] = nodes[y];
			}

			this.length = nodes.length;

			return this;
		}
	};

	exports.default = DOM;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }
/******/ ]);
module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostname; });
/* unused harmony export media */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return spacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fontSizes; });
/* unused harmony export breakpoints */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* unused harmony export measure */
var hostname = "http://www.sean-blanton.com:8080";

var media = ['32rem', '40rem', '70rem'].map(function (b) {
  return '@media (min-width: ' + b + ')';
});

var gray1 = '#2F3031';
var gray2 = '#72777A';
var gray3 = '#F7F7F7';
var teal1 = '#00738E';
var teal2 = '#00BCD5';
var indigo1 = '#520093';
var indigo2 = '#8B00F3';

var spacing = [0, 4, 8, 16, 24, 32, 48, 96, 128, 256, 320];

var fontSizes = ['3em', '2em', '1.5em', '1.25em', '1em', '0.875em'];

var breakpoints = {
  small: media[0],
  medium: media[1],
  large: media[2]
};

var fontFamily = {
  sansSerif: "-apple-system, BlinkMacSystemFont,'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  code: "Consolas, Monaco,'Lucida Console', 'Liberation Mono','DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace"
};

var colors = {
  gray1: gray1, gray2: gray2, gray3: gray3, teal1: teal1, teal2: teal2, indigo1: indigo1, indigo2: indigo2
};

var measure = {
  xs: '28ch',
  s: '45ch',
  m: '55ch',
  l: '65ch',
  xl: '75ch'
};

/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config.js");
var _jsxFileName = '/Users/seanblanton/Documents/Sites/blanton/pages/_document.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  * { box-sizing: border-box }\n  html, body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-family: ', ';\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  * { box-sizing: border-box }\n  html, body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-family: ', ';\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n']);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





// eslint-disable-next-line
Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject, __WEBPACK_IMPORTED_MODULE_3__config__["b" /* fontFamily */].sansSerif);

var MyDocument = function (_Document) {
	_inherits(MyDocument, _Document);

	function MyDocument() {
		_classCallCheck(this, MyDocument);

		return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
	}

	_createClass(MyDocument, [{
		key: 'render',
		value: function render() {
			var sheet = new __WEBPACK_IMPORTED_MODULE_2_styled_components__["ServerStyleSheet"]();
			var main = sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}));
			var styleTags = sheet.getStyleElement();

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'html',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 26
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charset: 'UTF-8', __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1', __source: {
							fileName: _jsxFileName,
							lineNumber: 29
						}
					}),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/x-icon', href: __WEBPACK_IMPORTED_MODULE_3__config__["d" /* hostname */] + '/static/favicon.ico?v=1.3', __source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					}),
					styleTags
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'body',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 35
						}
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ className: 'root', __source: {
								fileName: _jsxFileName,
								lineNumber: 36
							}
						},
						main
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 39
						}
					})
				)
			);
		}
	}]);

	return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map
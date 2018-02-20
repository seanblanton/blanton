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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_system__ = __webpack_require__("styled-system");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_system___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_system__);
var _templateObject = _taggedTemplateLiteral(["\n\t\t", "\n\t\t", "\n\t\t"], ["\n\t\t", "\n\t\t", "\n\t\t"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Box = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_1_styled_system__["width"], __WEBPACK_IMPORTED_MODULE_1_styled_system__["space"]);

/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "./components/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Box__ = __webpack_require__("./components/Box.js");
var _templateObject = _taggedTemplateLiteral(["\n\t\theight: 100%;\n\t\tmax-width: 640px;\n\t\t"], ["\n\t\theight: 100%;\n\t\tmax-width: 640px;\n\t\t"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2__Box__["a" /* default */]).attrs({
	px: __WEBPACK_IMPORTED_MODULE_1__config__["e" /* spacing */][4],
	py: __WEBPACK_IMPORTED_MODULE_1__config__["e" /* spacing */][7],
	my: 0,
	mx: 'auto'
})(_templateObject);

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Text__ = __webpack_require__("./components/Text.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Box__ = __webpack_require__("./components/Box.js");
var _jsxFileName = '/Users/seanblanton/Documents/Sites/blanton/components/Header.js';






var Header = function Header(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_4__Box__["a" /* default */],
		{ pb: __WEBPACK_IMPORTED_MODULE_1__config__["e" /* spacing */][3], __source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
			{ href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3__Text__["e" /* Title */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 12
					}
				},
				'Sean Blanton'
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_3__Text__["d" /* Subtitle */],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			},
			' Product Designer at Facebook '
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_3__Text__["b" /* Paragraph */],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			},
			' Working on building scalable design systems '
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/PostList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util___ = __webpack_require__("./util/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Box__ = __webpack_require__("./components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Text__ = __webpack_require__("./components/Text.js");

var _jsxFileName = '/Users/seanblanton/Documents/Sites/blanton/components/PostList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var PostList = function (_React$Component) {
  _inherits(PostList, _React$Component);

  function PostList() {
    _classCallCheck(this, PostList);

    return _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).apply(this, arguments));
  }

  _createClass(PostList, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__Box__["a" /* default */],
        { pt: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* spacing */][3], pb: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* spacing */][3], __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        this.props.post.map(function (post, i) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
              href: '/post?title=' + post.title + '&date=' + post.date + '&post=' + post.body,
              as: '/' + __WEBPACK_IMPORTED_MODULE_4_moment___default()(post.date).format("YYYY/MM/D") + '/' + Object(__WEBPACK_IMPORTED_MODULE_6__util___["e" /* spaceToDash */])(post.title).toLowerCase(),
              key: i, prefetch: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__Box__["a" /* default */],
              { pt: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* spacing */][3], pb: __WEBPACK_IMPORTED_MODULE_5__config__["e" /* spacing */][3], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__Text__["a" /* Heading */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  }
                },
                ' ',
                post.title,
                ' '
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__Text__["c" /* ParagraphSecondary */],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                ' ',
                __WEBPACK_IMPORTED_MODULE_4_moment___default()(post.date).format("MMMM D, YYYY"),
                ' '
              )
            )
          );
        })
      );
    }
  }], [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(_asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var res, json;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(__WEBPACK_IMPORTED_MODULE_5__config__["d" /* hostname */] + '/api/posts/');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              json = _context.sent;
              return _context.abrupt('return', json ? json.data : {});

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    })))
  }]);

  return PostList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (PostList);

/***/ }),

/***/ "./components/Text.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ParagraphSecondary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util___ = __webpack_require__("./util/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_hoc__ = __webpack_require__("./util/hoc.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Users/seanblanton/Documents/Sites/blanton/components/Text.js";

var _templateObject = _taggedTemplateLiteral(["\n\t", "\n"], ["\n\t", "\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var config = {
	"title": {
		fontSize: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* fontSizes */][2],
		lineHeight: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* spacing */][5]),
		fontWeight: 400,
		padding: 0,
		margin: 0
	},
	"subtitle": {
		fontSize: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* fontSizes */][4],
		lineHeight: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* spacing */][5]),
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* colors */].gray2
	},
	"heading": {
		fontSize: __WEBPACK_IMPORTED_MODULE_3__config__["c" /* fontSizes */][3],
		lineHeight: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* spacing */][5]),
		fontWeight: 400,
		padding: 0,
		margin: 0
	},
	"paragraph": {
		fontSize: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["c" /* fontSizes */][4]),
		lineHeight: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* spacing */][4]),
		padding: 0,
		margin: 0
	},
	"paragraphSecondary": {
		fontSize: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["c" /* fontSizes */][4]),
		lineHeight: Object(__WEBPACK_IMPORTED_MODULE_4__util___["d" /* px */])(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* spacing */][4]),
		padding: 0,
		margin: 0,
		color: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* colors */].gray2
	}
};

var Text = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(Object(__WEBPACK_IMPORTED_MODULE_5__util_hoc__["a" /* default */])()).attrs({
	as: function as(props) {
		return props.as || 'p';
	}
})(_templateObject, function (props) {
	return Object(__WEBPACK_IMPORTED_MODULE_4__util___["c" /* parseProps */])(config[props.config]);
});

Text.propTypes = {
	config: Object(__WEBPACK_IMPORTED_MODULE_2_prop_types__["oneOf"])(Object.keys(config))
};

Text.defaultProps = {
	config: "paragraph"
};

/* unused harmony default export */ var _unused_webpack_default_export = (Text);

var Title = function Title(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, _extends({}, props, { as: "h1", config: "title", __source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}));
};
Title.displayName = "Title";

var Subtitle = function Subtitle(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, _extends({}, props, { as: "h2", config: "subtitle", __source: {
			fileName: _jsxFileName,
			lineNumber: 67
		}
	}));
};
Subtitle.displayName = "Subtitle";

var Heading = function Heading(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, _extends({}, props, { as: "h3", config: "heading", __source: {
			fileName: _jsxFileName,
			lineNumber: 70
		}
	}));
};
Heading.displayName = "Heading";

var Paragraph = function Paragraph(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, _extends({}, props, { as: "p", config: "paragraph", __source: {
			fileName: _jsxFileName,
			lineNumber: 73
		}
	}));
};
Paragraph.displayName = "Paragraph";

var ParagraphSecondary = function ParagraphSecondary(props) {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Text, _extends({}, props, { as: "p", config: "paragraphSecondary", __source: {
			fileName: _jsxFileName,
			lineNumber: 76
		}
	}));
};
ParagraphSecondary.displayName = "ParagraphSecondary";

/***/ }),

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Container__ = __webpack_require__("./components/Container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PostList__ = __webpack_require__("./components/PostList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util___ = __webpack_require__("./util/index.js");

var _jsxFileName = "/Users/seanblanton/Documents/Sites/blanton/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "Sean Blanton ";
      Object(__WEBPACK_IMPORTED_MODULE_5__util___["a" /* initGA */])();
      Object(__WEBPACK_IMPORTED_MODULE_5__util___["b" /* logPageView */])();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__components_Container__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_PostList__["a" /* default */], { post: this.props.posts, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        })
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  var posts;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_4__components_PostList__["a" /* default */].fetch();

        case 2:
          posts = _context.sent;
          return _context.abrupt("return", {
            posts: posts
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./util/hoc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var create = __webpack_require__("react").createElement;

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return function (_ref) {
    var children = _ref.children,
        otherProps = _objectWithoutProperties(_ref, ['children']);

    var tag = otherProps['as'] || 'div';

    var as = otherProps.as,
        config = otherProps.config,
        props = _objectWithoutProperties(otherProps, ['as', 'config']);

    return create(tag, props, children);
  };
});

/***/ }),

/***/ "./util/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export is */
/* unused harmony export isNum */
/* unused harmony export isArr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return px; });
/* unused harmony export alpha */
/* unused harmony export isNeg */
/* unused harmony export randomColor */
/* unused harmony export toCamelCase */
/* unused harmony export toDash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseProps; });
/* unused harmony export trimStr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return spaceToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logPageView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chroma_js__ = __webpack_require__("chroma-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chroma_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_ga__ = __webpack_require__("react-ga");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_ga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_ga__);




var is = function is(n) {
  return n !== undefined && n !== null;
};
var isNum = function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var isArr = function isArr(a) {
  return Array.isArray(a) ? a : [a];
};
var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};
var alpha = function alpha(c, val) {
  return __WEBPACK_IMPORTED_MODULE_0_chroma_js___default()(c).alpha(val).css();
};
var isNeg = function isNeg(n) {
  return n < 0;
};

var randomColor = function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

var toCamelCase = function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

var toDash = function toDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

var parseProps = function parseProps(props) {
  var styleObj = {};
  Object.keys(props).forEach(function (key) {
    styleObj[toDash(key)] = '' + props[key];
  });
  return styleObj;
};

var trimStr = function trimStr(string) {
  return string.replace(/\s+/g, '');
};

var spaceToDash = function spaceToDash(string) {
  return string.replace(/\s+/g, '-');
};

var initGA = function initGA() {
  __WEBPACK_IMPORTED_MODULE_2_react_ga___default.a.initialize('UA-29141738-1');
};
var logPageView = function logPageView() {
  __WEBPACK_IMPORTED_MODULE_2_react_ga___default.a.set({ page: window.location.pathname });
  __WEBPACK_IMPORTED_MODULE_2_react_ga___default.a.pageview(window.location.pathname);
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "chroma-js":
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
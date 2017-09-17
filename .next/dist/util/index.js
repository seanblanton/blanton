'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPageView = exports.initGA = exports.spaceToDash = exports.trimStr = exports.parseProps = exports.toDash = exports.toCamelCase = exports.randomColor = exports.isNeg = exports.alpha = exports.px = exports.isArr = exports.isNum = exports.is = undefined;

var _keys = require('next/node_modules/babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var is = exports.is = function is(n) {
  return n !== undefined && n !== null;
};
var isNum = exports.isNum = function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var isArr = exports.isArr = function isArr(a) {
  return Array.isArray(a) ? a : [a];
};
var px = exports.px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};
var alpha = exports.alpha = function alpha(c, val) {
  return (0, _chromaJs2.default)(c).alpha(val).css();
};
var isNeg = exports.isNeg = function isNeg(n) {
  return n < 0;
};

var randomColor = exports.randomColor = function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
};

var toCamelCase = exports.toCamelCase = function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

var toDash = exports.toDash = function toDash(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

var parseProps = exports.parseProps = function parseProps(props) {
  var styleObj = {};
  (0, _keys2.default)(props).forEach(function (key) {
    styleObj[toDash(key)] = '' + props[key];
  });
  return styleObj;
};

var trimStr = exports.trimStr = function trimStr(string) {
  return string.replace(/\s+/g, '');
};

var spaceToDash = exports.spaceToDash = function spaceToDash(string) {
  return string.replace(/\s+/g, '-');
};

var initGA = exports.initGA = function initGA() {
  _reactGa2.default.initialize('UA-29141738-1');
};
var logPageView = exports.logPageView = function logPageView() {
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
};
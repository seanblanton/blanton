'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _config = require('./../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * { box-sizing: border-box }\n  html, body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-family: ', ';\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n'], ['\n  * { box-sizing: border-box }\n  html, body {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-family: ', ';\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n  }\n\n']);

// eslint-disable-next-line
(0, _styledComponents.injectGlobal)(_templateObject, _config.fontFamily.sansSerif);

var MyDocument = function (_Document) {
	(0, _inherits3.default)(MyDocument, _Document);

	function MyDocument() {
		(0, _classCallCheck3.default)(this, MyDocument);

		return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
	}

	(0, _createClass3.default)(MyDocument, [{
		key: 'render',
		value: function render() {
			var sheet = new _styledComponents.ServerStyleSheet();
			var main = sheet.collectStyles(_react2.default.createElement(_document.Main, null));
			var styleTags = sheet.getStyleElement();

			return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('link', { rel: 'icon', type: 'image/x-icon', href: _config.hostname + '/static/favicon.ico?v=1.3' }), styleTags), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null)));
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;
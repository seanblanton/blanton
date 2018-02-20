'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

var _config = require('./../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * { box-sizing: border-box }\n  html, body {\n    color: ', ';\n    font-family: ', ';\n    height: 100%;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    transition: ', ';\n    width: 100%;\n  }\n  ::selection {\n    background: #FFFCA0; /* WebKit/Blink Browsers */\n  }\n'], ['\n  * { box-sizing: border-box }\n  html, body {\n    color: ', ';\n    font-family: ', ';\n    height: 100%;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    transition: ', ';\n    width: 100%;\n  }\n  ::selection {\n    background: #FFFCA0; /* WebKit/Blink Browsers */\n  }\n']);

// eslint-disable-next-line
(0, _styledComponents.injectGlobal)(_templateObject, _config.colors.gray3, _config.fontFamily.sansSerif, _config.transition);

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

      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { charset: 'UTF-8' }), _react2.default.createElement('meta', { name: 'description', content: 'Sean Blanton is a product designer living in Seattle building design systems and tools at Facebook' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }), _react2.default.createElement('meta', { name: 'google-site-verification', content: 'JE7y-INK0WYZeEZ024e6AmCqmNYQ0ORHvgihEn1B-Qk' }), _react2.default.createElement('link', { rel: 'icon', type: 'image/x-icon', href: _config.hostname + '/static/favicon.ico?v=1.3' }), _react2.default.createElement('link', { href: _config.hostname + '/static/prism.css', rel: 'stylesheet' }), styleTags), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null), _react2.default.createElement('script', { href: _config.hostname + '/static/prism.js' }, ' '), _react2.default.createElement('script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-29141738-1' })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
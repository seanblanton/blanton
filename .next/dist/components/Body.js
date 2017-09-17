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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('./../config');

var _Text = require('./Text');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Markdown = require('./Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body() {
    (0, _classCallCheck3.default)(this, Body);

    return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
  }

  (0, _createClass3.default)(Body, [{
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement(_Box2.default, { pt: _config.spacing[5], pb: _config.spacing[5] }, _react2.default.createElement(_Text.Heading, null, ' ', this.props.title, ' '), _react2.default.createElement(_Text.ParagraphSecondary, null, ' ', (0, _moment2.default)(this.props.date).format("MMMM D, YYYY"), ' '), _react2.default.createElement(_Markdown2.default, { children: this.props.body }));
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;
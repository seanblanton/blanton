'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('./../config');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('./Text');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _StyledLink = require('./StyledLink');

var _StyledLink2 = _interopRequireDefault(_StyledLink);

var _Wordmark = require('./Wordmark');

var _Wordmark2 = _interopRequireDefault(_Wordmark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
	return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_StyledLink2.default, { href: '/' }, _react2.default.createElement(_Text.Subtitle, null, ' \u2190 Home ')));
};

exports.default = Header;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('./../config');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Text = require('./Text');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _StyledLink = require('./StyledLink');

var _StyledLink2 = _interopRequireDefault(_StyledLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
	return _react2.default.createElement(_Box2.default, { py: _config.spacing[6] }, _react2.default.createElement(_StyledLink2.default, { href: '/' }, _react2.default.createElement(_Text.Title, null, 'Sean Blanton')), _react2.default.createElement(_Text.Subtitle, null, 'I\'m a product designer designing and building design systems and tools at Facebook.'));
};

exports.default = Header;
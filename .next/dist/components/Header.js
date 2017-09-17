'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('./../config');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Text = require('./Text');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
	return _react2.default.createElement(_Box2.default, { pb: _config.spacing[3] }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement(_Text.Title, null, 'Sean Blanton')), _react2.default.createElement(_Text.Subtitle, null, ' Product Designer at Facebook '), _react2.default.createElement(_Text.Paragraph, null, ' Working on building scalable design systems '));
};

exports.default = Header;
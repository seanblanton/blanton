"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ParagraphSecondary = exports.Paragraph = exports.Heading = exports.Subtitle = exports.Title = undefined;

var _extends2 = require("next/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("next/node_modules/babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _taggedTemplateLiteral2 = require("next/node_modules/babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require("prop-types");

var _config = require("./../config");

var _util = require("./../util/");

var _hoc = require("./../util/hoc");

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t", "\n"], ["\n\t", "\n"]);

var config = {
	"title": {
		fontSize: _config.fontSizes[2],
		lineHeight: (0, _util.px)(_config.spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0
	},
	"subtitle": {
		fontSize: _config.fontSizes[4],
		lineHeight: (0, _util.px)(_config.spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: _config.colors.gray2
	},
	"heading": {
		fontSize: _config.fontSizes[3],
		lineHeight: (0, _util.px)(_config.spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0
	},
	"paragraph": {
		fontSize: (0, _util.px)(_config.fontSizes[4]),
		lineHeight: (0, _util.px)(_config.spacing[4]),
		padding: 0,
		margin: 0
	},
	"paragraphSecondary": {
		fontSize: (0, _util.px)(_config.fontSizes[4]),
		lineHeight: (0, _util.px)(_config.spacing[4]),
		padding: 0,
		margin: 0,
		color: _config.colors.gray2
	}
};

var Text = (0, _styledComponents2.default)((0, _hoc2.default)()).attrs({
	as: function as(props) {
		return props.as || 'p';
	}
})(_templateObject, function (props) {
	return (0, _util.parseProps)(config[props.config]);
});

Text.propTypes = {
	config: (0, _propTypes.oneOf)((0, _keys2.default)(config))
};

Text.defaultProps = {
	config: "paragraph"
};

exports.default = Text;
var Title = exports.Title = function Title(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({}, props, { as: "h1", config: "title" }));
};
Title.displayName = "Title";

var Subtitle = exports.Subtitle = function Subtitle(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({}, props, { as: "h2", config: "subtitle" }));
};
Subtitle.displayName = "Subtitle";

var Heading = exports.Heading = function Heading(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({}, props, { as: "h3", config: "heading" }));
};
Heading.displayName = "Heading";

var Paragraph = exports.Paragraph = function Paragraph(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({}, props, { as: "p", config: "paragraph" }));
};
Paragraph.displayName = "Paragraph";

var ParagraphSecondary = exports.ParagraphSecondary = function ParagraphSecondary(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({}, props, { as: "p", config: "paragraphSecondary" }));
};
ParagraphSecondary.displayName = "ParagraphSecondary";
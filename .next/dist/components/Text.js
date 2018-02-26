"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Meta = exports.ParagraphSecondary = exports.Paragraph = exports.Heading = exports.Subtitle = exports.TitleSecondary = exports.Title = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

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
		fontSize: _config.fontSizes[0],
		lineHeight: 1.34,
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: _config.colors.gray2,
		paddingBottom: (0, _util.px)(_config.spacing[3])
	},
	"titleSecondary": {
		fontSize: _config.fontSizes[2],
		fontWeight: 500,
		padding: 0,
		margin: 0,
		color: _config.colors.gray2
	},
	"subtitle": {
		fontSize: _config.fontSizes[4],
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: _config.colors.gray3,
		maxWidth: '60%'
	},
	"heading": {
		fontSize: _config.fontSizes[3],
		fontWeight: 400,
		padding: 0,
		margin: 0
	},
	"paragraph": {
		fontSize: (0, _util.px)(_config.fontSizes[4]),
		padding: 0,
		margin: 0,
		color: _config.colors.gray3
	},
	"paragraphSecondary": {
		fontSize: (0, _util.px)(_config.fontSizes[5]),
		padding: 0,
		margin: 0,
		color: _config.colors.gray3
	},
	"meta": {
		fontSize: (0, _util.px)(_config.fontSizes[6]),
		fontWeight: 600,
		letterSpacing: '0.1em',
		padding: 0,
		margin: 0,
		color: _config.colors.gray3,
		textTransform: 'uppercase'
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
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "h1", config: "title" }, props));
};
Title.displayName = "Title";

var TitleSecondary = exports.TitleSecondary = function TitleSecondary(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "h1", config: "titleSecondary" }, props));
};
Title.displayName = "TitleSecondary";

var Subtitle = exports.Subtitle = function Subtitle(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "h2", config: "subtitle" }, props));
};
Subtitle.displayName = "Subtitle";

var Heading = exports.Heading = function Heading(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "h3", config: "heading" }, props));
};
Heading.displayName = "Heading";

var Paragraph = exports.Paragraph = function Paragraph(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "p", config: "paragraph" }, props));
};
Paragraph.displayName = "Paragraph";

var ParagraphSecondary = exports.ParagraphSecondary = function ParagraphSecondary(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "p", config: "paragraphSecondary" }, props));
};
ParagraphSecondary.displayName = "ParagraphSecondary";

var Meta = exports.Meta = function Meta(props) {
	return _react2.default.createElement(Text, (0, _extends3.default)({ as: "p", config: "meta" }, props));
};
Meta.displayName = "Meta";
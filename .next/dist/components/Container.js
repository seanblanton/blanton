"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _taggedTemplateLiteral2 = require("next/node_modules/babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("./../config");

var _Box = require("./Box");

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\t\theight: 100%;\n\t\tmax-width: 640px;\n\t\t"], ["\n\t\theight: 100%;\n\t\tmax-width: 640px;\n\t\t"]);

var Container = (0, _styledComponents2.default)(_Box2.default).attrs({
	px: _config.spacing[4],
	py: _config.spacing[7],
	my: 0,
	mx: 'auto'
})(_templateObject);

exports.default = Container;
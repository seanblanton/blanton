"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("./../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\tcolor: ", ";\n\tcursor: pointer;\n\tfont-size: ", ";\n\ttext-decoration: none;\n\ttransition: ", ";\n  &:hover {\n    color: ", ";\n\t\ttransition: ", ";\n  }\n"], ["\n\tcolor: ", ";\n\tcursor: pointer;\n\tfont-size: ", ";\n\ttext-decoration: none;\n\ttransition: ", ";\n  &:hover {\n    color: ", ";\n\t\ttransition: ", ";\n  }\n"]);

var Wordmark = _styledComponents2.default.p(_templateObject, _config.colors.gray3, _config.fontSizes[2], _config.transition, _config.colors.gray1, _config.transition);

exports.default = function () {
  return _react2.default.createElement(_link2.default, { prefetch: true, href: "/", passHref: true }, _react2.default.createElement(Wordmark, null, " \u24E2 "));
};
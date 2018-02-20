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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n\tcolor: ", ";\n\tcursor: pointer;\n\ttext-decoration: none;\n\ttransition: ", ";\n  &:hover {\n    color: ", ";\n    padding-bottom: 2px;\n    border-bottom: 2px solid ", ";\n\t\ttransition: ", ";\n  }\n"], ["\n\tcolor: ", ";\n\tcursor: pointer;\n\ttext-decoration: none;\n\ttransition: ", ";\n  &:hover {\n    color: ", ";\n    padding-bottom: 2px;\n    border-bottom: 2px solid ", ";\n\t\ttransition: ", ";\n  }\n"]);

var StyledLink = _styledComponents2.default.a(_templateObject, _config.colors.gray1, _config.transition, _config.colors.indigo2, _config.colors.indigo2, _config.transition);

exports.default = function (_ref) {
  var href = _ref.href,
      as = _ref.as,
      key = _ref.key,
      children = _ref.children;
  return _react2.default.createElement(_link2.default, { prefetch: true, href: href, as: as, key: key, passHref: true }, _react2.default.createElement(StyledLink, null, children));
};
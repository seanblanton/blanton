'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.Link = exports.BlockQuote = exports.CodeBlock = exports.Code = exports.Heading = exports.Paragraph = exports.Pre = exports.Image = undefined;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('next/node_modules/babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('./../config');

var _util = require('./../util/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100vw;\n  margin-left: -10vw;\n  margin-right: -10vw;\n  height: 100vh;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(', ');\n'], ['\n  width: 100vw;\n  margin-left: -10vw;\n  margin-right: -10vw;\n  height: 100vh;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(', ');\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', ';\n  padding: ', ';\n  margin: 0;\n  white-space: pre-wrap;\n  background-color: ', ';\n'], ['\n  font-family: ', ';\n  padding: ', ';\n  margin: 0;\n  white-space: pre-wrap;\n  background-color: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: inherit;\n  font-size: 16;\n  line-height: 1.75;\n'], ['\n  font-family: inherit;\n  font-size: 16;\n  line-height: 1.75;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n    font-size: ', ';\n    line-height: 1.25;\n    font-weight: 400;\n    color: ', ';\n    font-style: ', ';;\n    padding: 0;\n    margin: ', ' 0 0;\n'], ['\n    font-size: ', ';\n    line-height: 1.25;\n    font-weight: 400;\n    color: ', ';\n    font-style: ', ';;\n    padding: 0;\n    margin: ', ' 0 0;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', ';\n  padding: 4px;\n  background-color: ', ';\n'], ['\n  font-family: ', ';\n  padding: 4px;\n  background-color: ', ';\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: ', ';\n  font-style: italic;\n  line-height: 1.7;\n  margin: ', ' 0;\n'], ['\n  font-size: ', ';\n  font-style: italic;\n  line-height: 1.7;\n  margin: ', ' 0;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  text-decoration: none;\n  &:hover {\n    padding-bottom: 2px;\n    border-bottom: 2px solid ', ';\n  }\n'], ['\n  color: ', ';\n  text-decoration: none;\n  &:hover {\n    padding-bottom: 2px;\n    border-bottom: 2px solid ', ';\n  }\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  &::before {\n  }\n'], ['\n  &::before {\n  }\n']);

var Image = exports.Image = _styledComponents2.default.div(_templateObject, function (props) {
  return props.src;
});

var Pre = exports.Pre = _styledComponents2.default.pre(_templateObject2, _config.fontFamily.code, (0, _util.px)(_config.spacing[3]), _config.colors.gray3);

var Paragraph = exports.Paragraph = _styledComponents2.default.p(_templateObject3);

var Heading = exports.Heading = _styledComponents2.default.h3(_templateObject4, function (props) {
  return _config.fontSizes[props.level] || '1em';
}, function (props) {
  return props.level > 4 ? _config.colors.gray2 : _config.colors.gray1;
}, function (props) {
  return props.level === 5 ? 'italic' : null;
}, function (props) {
  return props.level <= 3 ? (0, _util.px)(_config.spacing[6]) : 0;
});

var Code = exports.Code = _styledComponents2.default.code(_templateObject5, _config.fontFamily.code, _config.colors.gray3);

var CodeBlock = exports.CodeBlock = function CodeBlock(props) {
  return _react2.default.createElement(Pre, (0, _extends3.default)({}, props, { children: props.literal }));
};

var BlockQuote = exports.BlockQuote = _styledComponents2.default.blockquote(_templateObject6, _config.fontSizes[2], (0, _util.px)(_config.spacing[6]));

var Link = exports.Link = _styledComponents2.default.a(_templateObject7, _config.colors.indigo2, _config.colors.indigo2);

var Item = exports.Item = _styledComponents2.default.li(_templateObject8);

var renderers = {
  Image: Image,
  Code: Code,
  CodeBlock: CodeBlock,
  BlockQuote: BlockQuote,
  Paragraph: Paragraph,
  Link: Link,
  Item: Item,
  Heading: Heading
};

var Markdown = function Markdown(props) {
  return _react2.default.createElement(_reactMarkdown2.default, {
    source: props.children,
    renderers: renderers
  });
};

exports.default = Markdown;
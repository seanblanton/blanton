'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderers = exports.Pre = exports.paragraph = exports.link = exports.listItem = exports.heading = exports.code = exports.inlineCode = exports.blockquote = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

var _config = require('./../config');

var _util = require('./../util/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  border-left: 4px solid ', ';\n  font-size: ', ';\n  font-style: italic;\n  margin: ', ' 0;\n  padding: ', ' ', ';\n'], ['\n  border-left: 4px solid ', ';\n  font-size: ', ';\n  font-style: italic;\n  margin: ', ' 0;\n  padding: ', ' ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  color: ', ';\n  font-family: ', ';\n  padding: ', ';\n'], ['\n  background-color: ', ';\n  color: ', ';\n  font-family: ', ';\n  padding: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n    color: ', ';\n    font-size: ', ';\n    font-weight: 600;\n    font-style: ', ';\n    line-height: ', ';\n    margin-top: ', ';\n    margin-bottom:  ', ';\n    padding: 0;\n\n'], ['\n    color: ', ';\n    font-size: ', ';\n    font-weight: 600;\n    font-style: ', ';\n    line-height: ', ';\n    margin-top: ', ';\n    margin-bottom:  ', ';\n    padding: 0;\n\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  list-style: none;\n  margin-bottom: ', ';\n  &::before {\n    content: \'\u2022\';\n    color: ', ';\n    margin-right: ', ';\n    width: 1em;\n    margin-left: -2em;\n  }\n'], ['\n  list-style: none;\n  margin-bottom: ', ';\n  &::before {\n    content: \'\u2022\';\n    color: ', ';\n    margin-right: ', ';\n    width: 1em;\n    margin-left: -2em;\n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  border-bottom: 2px solid ', ';\n  cursor: pointer;\n  color: ', ';\n  padding-bottom: 2px;\n  text-decoration: none;\n  transition: ', ';\n  &:hover {\n    border-bottom: 2px solid ', ';\n    color: ', ';\n    padding-bottom: 2px;\n  }\n'], ['\n  border-bottom: 2px solid ', ';\n  cursor: pointer;\n  color: ', ';\n  padding-bottom: 2px;\n  text-decoration: none;\n  transition: ', ';\n  &:hover {\n    border-bottom: 2px solid ', ';\n    color: ', ';\n    padding-bottom: 2px;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-family: inherit;\n  font-size: ', ';\n  line-height: 1.75;\n  margin: 0;\n  padding-bottom: 1em;\n\n'], ['\n  color: ', ';\n  font-family: inherit;\n  font-size: ', ';\n  line-height: 1.75;\n  margin: 0;\n  padding-bottom: 1em;\n\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ', ';\n  font-size: ', ';\n  padding: ', ';\n  margin: 2em 0;\n  white-space: pre-wrap;\n  background-color: ', ';\n'], ['\n  font-family: ', ';\n  font-size: ', ';\n  padding: ', ';\n  margin: 2em 0;\n  white-space: pre-wrap;\n  background-color: ', ';\n']);

var blockquote = exports.blockquote = _styledComponents2.default.blockquote(_templateObject, _config.colors.gray3, _config.fontSizes[4], (0, _util.px)(_config.spacing[6]), (0, _util.px)(_config.spacing[2]), (0, _util.px)(_config.spacing[4]));

var inlineCode = exports.inlineCode = _styledComponents2.default.code(_templateObject2, _config.colors.indigo0, _config.colors.indigo2, _config.fontFamily.code, (0, _util.px)(_config.spacing[1]));

var code = exports.code = function code(props) {
  var html = _prismjs2.default.highlight(props.value, _prismjs2.default.languages[props.language]);
  var cls = props.language ? 'language-' + props.language : 'language-javascript';

  return _react2.default.createElement(Pre, (0, _extends3.default)({ className: cls }, props, { children: props.value }), _react2.default.createElement('code', {
    dangerouslySetInnerHTML: { __html: html },
    className: cls
  }));
};

var heading = exports.heading = _styledComponents2.default.h3(_templateObject3, function (props) {
  return props.level > 4 ? _config.colors.gray2 : _config.colors.gray1;
}, function (props) {
  return _config.fontSizes[props.level] || '1em';
}, function (props) {
  return props.level === 5 ? 'italic' : null;
}, function (props) {
  return props.level < 3 ? 1.25 : 1.5;
}, (0, _util.px)(_config.spacing[4]), (0, _util.px)(_config.spacing[2]));

var listItem = exports.listItem = _styledComponents2.default.li(_templateObject4, (0, _util.px)(_config.spacing[3]), _config.colors.gray2, (0, _util.px)(_config.spacing[4]));

var link = exports.link = _styledComponents2.default.a(_templateObject5, _config.colors.gray2, _config.colors.gray2, _config.transition, _config.colors.indigo2, _config.colors.indigo2);

var paragraph = exports.paragraph = _styledComponents2.default.p(_templateObject6, _config.colors.gray2, _config.fontSizes[4]);

var Pre = exports.Pre = _styledComponents2.default.pre(_templateObject7, _config.fontFamily.code, _config.fontSizes[5], (0, _util.px)(_config.spacing[5]), _config.colors.gray4);

var renderers = exports.renderers = {
  inlineCode: inlineCode,
  code: code,
  blockquote: blockquote,
  paragraph: paragraph,
  link: link,
  listItem: listItem,
  heading: heading
};

var Markdown = function Markdown(props) {
  return _react2.default.createElement(_reactMarkdown2.default, {
    source: props.children,
    renderers: renderers
  });
};

exports.default = Markdown;
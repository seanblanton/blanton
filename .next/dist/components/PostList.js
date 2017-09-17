'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

require('isomorphic-fetch');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _config = require('./../config');

var _util = require('./../util/');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('./Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostList = function (_React$Component) {
  (0, _inherits3.default)(PostList, _React$Component);

  function PostList() {
    (0, _classCallCheck3.default)(this, PostList);

    return (0, _possibleConstructorReturn3.default)(this, (PostList.__proto__ || (0, _getPrototypeOf2.default)(PostList)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Box2.default, { pt: _config.spacing[3], pb: _config.spacing[3] }, this.props.post.map(function (post, i) {
        return _react2.default.createElement(_link2.default, {
          href: '/post?title=' + post.title + '&date=' + post.date + '&post=' + post.body,
          as: '/' + (0, _moment2.default)(post.date).format("YYYY/MM/D") + '/' + (0, _util.spaceToDash)(post.title).toLowerCase(),
          key: i, prefetch: true }, _react2.default.createElement(_Box2.default, { pt: _config.spacing[3], pb: _config.spacing[3] }, _react2.default.createElement(_Text.Heading, null, ' ', post.title, ' '), _react2.default.createElement(_Text.ParagraphSecondary, null, ' ', (0, _moment2.default)(post.date).format("MMMM D, YYYY"), ' ')));
      }));
    }
  }], [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var res, json;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(_config.hostname + '/api/posts/');

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              json = _context.sent;
              return _context.abrupt('return', json ? json.data : {});

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    })))
  }]);

  return PostList;
}(_react2.default.Component);

exports.default = PostList;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _util = require('./../util/');

var _config = require('./../config');

var _Container = require('./../components/Container');

var _Container2 = _interopRequireDefault(_Container);

var _PostHeader = require('./../components/PostHeader');

var _PostHeader2 = _interopRequireDefault(_PostHeader);

var _Body = require('./../components/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function (_Component) {
  (0, _inherits3.default)(Post, _Component);

  function Post() {
    (0, _classCallCheck3.default)(this, Post);

    return (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).apply(this, arguments));
  }

  (0, _createClass3.default)(Post, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = "Sean Blanton | " + this.props.title;
      (0, _util.initGA)();
      (0, _util.logPageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_PostHeader2.default, null), _react2.default.createElement(_Body2.default, this.props));
    }
  }]);

  return Post;
}(_react.Component);

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var title, formattedTitle, res, post;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = context.query.title;
            formattedTitle = (0, _util.spaceToDash)(title).toLowerCase();
            _context.next = 4;
            return (0, _isomorphicFetch2.default)(_config.hostname + '/api/posts/' + formattedTitle);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            post = _context.sent;
            return _context.abrupt('return', {
              title: post.data.title,
              date: post.data.date,
              body: post.data.body
            });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Container = require("./../components/Container");

var _Container2 = _interopRequireDefault(_Container);

var _Header = require("./../components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _PostList = require("./../components/PostList");

var _PostList2 = _interopRequireDefault(_PostList);

var _util = require("./../util/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "Sean Blanton ";
      (0, _util.initGA)();
      (0, _util.logPageView)();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_PostList2.default, { post: this.props.posts }));
    }
  }]);

  return Index;
}(_react.Component);

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var posts;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _PostList2.default.fetch();

        case 2:
          posts = _context.sent;

          console.log(posts);
          return _context.abrupt("return", {
            posts: posts
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
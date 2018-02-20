'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = require('react').createElement;

exports.default = function () {
    return function (_ref) {
        var children = _ref.children,
            otherProps = (0, _objectWithoutProperties3.default)(_ref, ['children']);

        var tag = otherProps['as'] || 'div';

        var as = otherProps.as,
            config = otherProps.config,
            props = (0, _objectWithoutProperties3.default)(otherProps, ['as', 'config']);

        return create(tag, props, children);
    };
};
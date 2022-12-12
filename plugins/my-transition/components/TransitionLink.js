"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.TransitionLink = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _shouldNavigate = require("../utils/shouldNavigate");

var _triggerTransition = require("../utils/triggerTransition");

var _createTransitionContext = require("../context/createTransitionContext");

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionLink.js";

if (typeof _react.forwardRef === 'undefined') {
  _react.forwardRef = (C => C, function () {
    throw new Error('"' + "forwardRef" + '" is read-only.');
  }());
}

const TransitionLink = /*#__PURE__*/(0, _react.forwardRef)(({
  to,
  children,
  exit,
  entry,
  activeStyle,
  partiallyActive,
  style,
  className,
  activeClassName,
  state,
  onClick,
  trigger,
  replace,
  innerRef,
  preventScrollJump,
  ...rest
}, ref) => {
  return /*#__PURE__*/_react.default.createElement(_createTransitionContext.Consumer, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, ({
    disableAnimation,
    ...context
  }) => /*#__PURE__*/_react.default.createElement(_gatsby.Link, (0, _extends2.default)({
    style: style,
    activeStyle: activeStyle,
    className: className,
    activeClassName: activeClassName,
    partiallyActive: partiallyActive,
    onClick: event => {
      // If the user has set their browser or OS to prefers-reduced-motion
      // we should respect that.
      if (disableAnimation) {
        return;
      }

      const weShouldNavigate = (0, _shouldNavigate.shouldNavigate)(event);

      if (weShouldNavigate) {
        (0, _triggerTransition.triggerTransition)({
          event,
          to,
          exit,
          entry,
          trigger,
          replace,
          preventScrollJump,
          linkState: state,
          ...context
        });
      }

      if (typeof onClick === 'function') {
        onClick(event, weShouldNavigate);
      }
    },
    to: to // use gatsby link so prefetching still happens. this is prevent defaulted in triggertransition
    ,
    ref: ref || innerRef
  }, rest, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }), children));
});
exports.TransitionLink = TransitionLink;
TransitionLink.propTypes = {
  to: _propTypes.default.string.isRequired,
  exitLength: _propTypes.default.number,
  entryDelay: _propTypes.default.number,
  exitFn: _propTypes.default.func,
  entryState: _propTypes.default.object
};
//# sourceMappingURL=TransitionLink.js.map
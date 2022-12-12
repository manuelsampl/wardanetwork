"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = Fade;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

var _gsap = _interopRequireDefault(require("gsap"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Fade.js";

const fade = ({
  exit: {
    length
  },
  node,
  direction
}) => {
  const duration = direction === 'out' ? length + length / 4 : length;
  const opacity = direction === 'in' ? 1 : 0;
  const scrollTop = document.scrollingElement && document.scrollingElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  const holdPosition = direction === 'out' ? {
    overflowY: 'hidden',
    height: '100vh',
    scrollTop: scrollTop
  } : {};
  return _gsap.default.timeline().set(node, holdPosition).fromTo(node, {
    opacity: !opacity
  }, {
    opacity: opacity,
    duration
  });
};

function Fade({
  exit,
  entry,
  fade: removedProp,
  duration,
  ...props
}) {
  const length = duration || 0.8;
  return /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({
    exit: {
      length: length,
      zIndex: 1,
      trigger: ({
        exit,
        node
      }) => fade({
        exit,
        node,
        direction: 'out'
      })
    },
    entry: {
      length: 0,
      trigger: ({
        exit,
        node
      }) => fade({
        exit,
        node,
        direction: 'in'
      })
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }), props.children);
}
//# sourceMappingURL=Fade.js.map
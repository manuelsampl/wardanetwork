"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = DefaultTransition;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Cover = _interopRequireDefault(require("./Cover"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _PaintDrip = _interopRequireDefault(require("./PaintDrip"));

var _Swipe = _interopRequireDefault(require("./Swipe"));

var _ = _interopRequireDefault(require("../"));

var _MorphTo = _interopRequireDefault(require("./MorphTo"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/index.js";

function DefaultTransition(allProps) {
  const {
    children,
    ...props
  } = allProps;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.cover && /*#__PURE__*/_react.default.createElement(_Cover.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 20
    }
  }), children), props.fade && /*#__PURE__*/_react.default.createElement(_Fade.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  }), children), props.paintDrip && /*#__PURE__*/_react.default.createElement(_PaintDrip.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 24
    }
  }), children), props.swipe && /*#__PURE__*/_react.default.createElement(_Swipe.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  }), children), !!props.morph && /*#__PURE__*/_react.default.createElement(_MorphTo.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 22
    }
  }), children), !props.cover && !props.fade && !props.paintDrip && !props.swipe && !props.morph && /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }), children));
}
//# sourceMappingURL=index.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/wrap-page.js";

const React = require('react');

const TransitionHandler = require('./components/TransitionHandler').default;

const Layout = require('./components/Layout').LayoutComponent; // eslint-disable-next-line react/prop-types,react/display-name


module.exports = ({
  element,
  props
}, pluginOptions) => {
  return /*#__PURE__*/React.createElement(Layout, (0, _extends2.default)({}, props, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }), /*#__PURE__*/React.createElement(TransitionHandler, (0, _extends2.default)({}, props, pluginOptions, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }), element));
};
//# sourceMappingURL=wrap-page.js.map
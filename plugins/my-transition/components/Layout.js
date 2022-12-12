"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LayoutComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/Layout.js";

/* eslint-disable no-undef */
const React = require('react');

const preferDefault = m => m && m.default || m;

let Layout = false;

if (typeof TL__GATSBY_LAYOUT_COMPONENT_PATH !== `undefined` && !!TL__GATSBY_LAYOUT_COMPONENT_PATH) {
  try {
    Layout = preferDefault(require(TL__GATSBY_LAYOUT_COMPONENT_PATH));
  } catch (e) {
    if (e.toString().indexOf(`Error: Cannot find module`) !== -1) {
      throw new Error(`Couldn't find layout component at "${TL__GATSBY_LAYOUT_COMPONENT_PATH}.\n\n` + `Please create layout component in that location or specify path to layout component in gatsby-config.js`);
    } else {
      // Logging the error for debugging older browsers as there is no way
      // to wrap the thrown error in a try/catch.
      console.error(e);
      throw e;
    }
  }
}

const LayoutComponent = ({
  children,
  ...props
}) => {
  if (Layout) {
    return /*#__PURE__*/React.createElement(Layout, (0, _extends2.default)({}, props, {
      __self: void 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 10
      }
    }), children);
  } else {
    return children;
  }
};

exports.LayoutComponent = LayoutComponent;
//# sourceMappingURL=Layout.js.map
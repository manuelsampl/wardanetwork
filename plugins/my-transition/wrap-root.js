"use strict";

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/wrap-root.js";

const React = require('react');

const {
  navigate
} = require('gatsby');

const InternalProvider = require('./context/InternalProvider').default;

module.exports = ({
  element
}) => {
  if (typeof window !== `undefined`) {
    window.addEventListener('popstate', function (event) {
      // prevent the back button during transitions as it breaks pages
      if (window.__tl_inTransition) {
        window.__tl_back_button_pressed = true;
        navigate(window.__tl_desiredPathname);
      }
    });
  }

  return /*#__PURE__*/React.createElement(InternalProvider, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, element);
};
//# sourceMappingURL=wrap-root.js.map
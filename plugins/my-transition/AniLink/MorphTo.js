"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

var _gsap = _interopRequireDefault(require("gsap"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/MorphTo.js";

const MorphTo = ({
  children,
  to,
  duration,
  morph
}) => /*#__PURE__*/_react.default.createElement(_.default, {
  to: to,
  exit: {
    length: duration
  },
  entry: {
    appearAfter: duration
  },
  trigger: async pages => {
    const exit = await pages.exit;
    const entry = await pages.entry;
    const morphFromEl = exit.node.querySelector(morph.from);
    const morphToEl = entry.node.querySelector(morph.to);
    const finalMeasurements = {
      height: morphToEl.offsetHeight,
      width: morphToEl.offsetWidth
    };

    _gsap.default.to(morphFromEl, {
      width: finalMeasurements.width,
      height: finalMeasurements.height,
      duration
    });
  },
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }
}, children);

var _default = MorphTo;
exports.default = _default;
//# sourceMappingURL=MorphTo.js.map
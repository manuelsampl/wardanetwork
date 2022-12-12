"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionPortal.js";
const portalRoot = typeof document !== `undefined` ? document.body : false;

const PortalContainer = props => {
  const zIndex = function (level) {
    switch (level) {
      case 'bottom':
        return 1000;

      case 'top':
        return 1200;

      default:
        return 1100;
    }
  }(props.level);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "gatsby-plugin-transition-link-portal",
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: zIndex
    },
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, props.children);
};

class TransitionPortal extends _react.Component {
  constructor() {
    super();

    this.componentDidMount = () => {
      portalRoot && portalRoot.appendChild(this.el);
    };

    this.componentWillUnmount = () => {
      portalRoot && portalRoot.removeChild(this.el);
    };

    this.el = typeof document !== `undefined` ? document.createElement('section') : false;
  }

  render() {
    return this.el && portalRoot ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, portalRoot && /*#__PURE__*/_react.default.createElement(PortalContainer, {
      styles: this.props.css,
      level: this.props.level,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 8
      }
    }, this.props.children)), this.el) : null;
  }

}

exports.default = TransitionPortal;
//# sourceMappingURL=TransitionPortal.js.map
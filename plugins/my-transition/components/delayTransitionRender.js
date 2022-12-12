"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = delayTransitionRender;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _requestanimationframeTimer = require("requestanimationframe-timer");

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/delayTransitionRender.js";

function delayTransitionRender(WrappedComponent) {
  class DelayedTransitionWrapper extends _react.Component {
    constructor(props) {
      super(props);
      this.state = {
        // if there is a delay, set shouldRender to false
        // then in componentdid mount shouldRender becomes true
        // after the delay.
        shouldRender: !!!this.props.delay
      };
    }

    componentDidMount() {
      this.renderTimeout = (0, _requestanimationframeTimer.setTimeout)(() => this.setState({
        shouldRender: true
      }), this.props.delay);
    }

    componentWillUnmount() {
      (0, _requestanimationframeTimer.clearTimeout)(this.renderTimeout);
    }

    render() {
      return this.state.shouldRender || typeof window === `undefined` ? /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5
        }
      })) : null;
    }

  }

  return DelayedTransitionWrapper;
}
//# sourceMappingURL=delayTransitionRender.js.map
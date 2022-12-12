"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _requestanimationframeTimer = require("requestanimationframe-timer");

var _createTransitionContext = require("../context/createTransitionContext");

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionRenderer.js";

class TransitionRenderer extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      shouldBeVisible: !!!this.props.appearAfter
    };

    this.componentDidMount = () => {
      const delay = typeof this.props.delay === 'number' ? this.props.delay : 0;
      const appearafter = typeof this.props.appearAfter === 'number' ? this.props.appearAfter : 0;
      const timeout = delay + appearafter;
      this.appearTimeout = (0, _requestanimationframeTimer.setTimeout)(() => this.setState({
        shouldBeVisible: true
      }), timeout);
    };

    this.componentWillUnmount = () => {
      (0, _requestanimationframeTimer.clearTimeout)(this.appearTimeout);
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // only rerender if the transition status changes.
    return this.props.transitionStatus !== nextProps.transitionStatus || this.state.shouldBeVisible !== nextState.shouldBeVisible || this.props.children !== nextProps.children;
  }

  render() {
    const {
      mount,
      entryZindex,
      exitZindex,
      transitionStatus,
      transitionState,
      children,
      injectPageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: `tl-wrapper ${mount ? 'tl-wrapper--mount' : 'tl-wrapper--unmount'} tl-wrapper-status--${transitionStatus}`,
      style: {
        zIndex: mount ? entryZindex : exitZindex,
        opacity: this.state.shouldBeVisible ? 1 : 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 4
      }
    }, /*#__PURE__*/_react.default.createElement(_createTransitionContext.PublicProvider, {
      value: { ...transitionState
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, // injectPageProps is a plugin option
    injectPageProps ? /*#__PURE__*/(0, _react.cloneElement)(children, { ...transitionState
    }) : children));
  }

}

exports.default = TransitionRenderer;
//# sourceMappingURL=TransitionRenderer.js.map
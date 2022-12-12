"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createTransitionContext = require("./createTransitionContext");

var _getPagesPromises = _interopRequireDefault(require("../utils/getPagesPromises"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/context/InternalProvider.js";

class InternalProvider extends _react.Component {
  constructor(props) {
    super(props);
    const prefersReducedMotionSetting = typeof window !== `undefined` && window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = prefersReducedMotionSetting;

    if (prefersReducedMotionSetting.matches && process.env.NODE_ENV === `development`) {
      console.warn(`[gatsby-plugin-transition-link] Warning! prefers-reduced-motion is activated via your OS settings. This means TransitionLink animations will not run.`);
    }

    this.state = {
      inTransition: false,
      disableAnimation: prefersReducedMotion.matches,
      // event
      e: false,
      // exit
      exitDelay: 0,
      exitLength: 0,
      exitState: {},
      exitProps: {},
      exitTrigger: false,
      // entry
      entryDelay: 0,
      entryLength: 0,
      entryState: {},
      entryProps: {},
      entryTrigger: false,
      // state updates
      updateContext: obj => this.setState(obj)
    };

    if (prefersReducedMotion && typeof prefersReducedMotion.addEventListener === `function`) {
      prefersReducedMotion.addEventListener('change', () => {
        this.setState({
          disableAnimation: prefersReducedMotion.matches
        });
      });
    } else if (prefersReducedMotion && typeof prefersReducedMotion.addListener === `function`) {
      prefersReducedMotion.addListener(() => {
        this.setState({
          disableAnimation: prefersReducedMotion.matches
        });
      });
    }
  }

  componentDidMount() {
    this.state.updateContext((0, _getPagesPromises.default)());
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(_createTransitionContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 10
      }
    }, this.props.children);
  }

}

InternalProvider.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = InternalProvider;
exports.default = _default;
//# sourceMappingURL=InternalProvider.js.map
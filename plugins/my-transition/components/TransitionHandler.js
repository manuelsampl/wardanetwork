"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _router = require("@reach/router");

var _TransitionRenderer = _interopRequireDefault(require("./TransitionRenderer"));

var _delayTransitionRender = _interopRequireDefault(require("./delayTransitionRender"));

var _createTransitionContext = require("../context/createTransitionContext");

var _onEnter = require("../functions/onEnter");

var _onExit = require("../functions/onExit");

var _secondsMs = require("../utils/secondsMs");

require("../style.css");

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/components/TransitionHandler.js";
const DelayedTransition = (0, _delayTransitionRender.default)(_reactTransitionGroup.Transition);

class TransitionHandler extends _react.Component {
  render() {
    const {
      props
    } = this;
    const {
      children,
      injectPageProps = true
    } = props;
    return /*#__PURE__*/_react.default.createElement(_createTransitionContext.Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 4
      }
    }, ({
      exitDelay,
      exitLength,
      exitState,
      entryDelay,
      entryLength,
      entryState,
      entryTrigger,
      entryProps,
      exitTrigger,
      exitProps,
      inTransition,
      updateContext,
      triggerResolve,
      appearAfter,
      preventScrollJump,
      hash,
      e
    }) => {
      return /*#__PURE__*/_react.default.createElement(_router.Location, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }
      }, ({
        location
      }) => {
        const {
          action,
          pathname,
          key: locationKey
        } = location;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tl-edges",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 10
          }
        }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, {
          component: null,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }
        }, /*#__PURE__*/_react.default.createElement(DelayedTransition, {
          key: pathname // we're using seconds but transitiongroup uses ms
          ,
          delay: (0, _secondsMs.getMs)(entryDelay),
          timeout: {
            enter: (0, _secondsMs.getMs)(entryLength),
            exit: (0, _secondsMs.getMs)(exitLength)
          },
          onEnter: node => !!node && !window.__tl_back_button_pressed && (0, _onEnter.onEnter)({
            node,
            action,
            inTransition,
            entryTrigger,
            entryProps,
            exitProps,
            pathname,
            updateContext,
            triggerResolve,
            preventScrollJump,
            hash,
            locationKey,
            appearAfter: (0, _secondsMs.getMs)(appearAfter),
            e
          }),
          onExit: node => !!node && !window.__tl_back_button_pressed && (0, _onExit.onExit)({
            node,
            inTransition,
            exitTrigger,
            entryProps,
            exitProps,
            triggerResolve,
            e
          }),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 12
          }
        }, transitionStatus => {
          const mount = transitionStatus === 'entering' || transitionStatus === 'entered';
          const states = {
            entry: {
              state: entryState,
              delay: entryDelay,
              length: entryLength
            },
            exit: {
              state: exitState,
              delay: exitDelay,
              length: exitLength
            }
          };
          const current = mount ? states.entry : states.exit;
          const transitionState = {
            transitionStatus,
            current,
            mount,
            ...states
          };
          const exitZindex = exitProps.zIndex || 0;
          const entryZindex = entryProps.zIndex || 1;
          return /*#__PURE__*/_react.default.createElement(_TransitionRenderer.default, {
            mount: mount,
            entryZindex: entryZindex,
            exitZindex: exitZindex,
            transitionStatus: transitionStatus,
            transitionState: transitionState,
            children: children,
            injectPageProps: injectPageProps,
            appearAfter: (0, _secondsMs.getMs)(appearAfter),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }
          });
        })));
      });
    });
  }

}

exports.default = TransitionHandler;
//# sourceMappingURL=TransitionHandler.js.map
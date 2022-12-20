"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = _interopRequireWildcard(require("../"));

var _gsap = _interopRequireDefault(require("gsap"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Cover.js";

class Cover extends _react.Component {
  constructor(_props) {
    super(_props);

    this.getCoverEl = () => document.getElementById(this.props.bg);

    this.horizontal = ({
      node,
      props: {
        length: seconds
      },
      direction
    }) => {
      const directionTo = direction === 'left' ? '-100%' : '100%';
      const directionFrom = direction === 'left' ? '100%' : '-100%';
      const wait = seconds / 6;
      const half = (seconds - wait) / 2;
      const cover = this.getCoverEl();
      return _gsap.default.timeline().set(cover, {
        y: 0,
        x: directionFrom,
        display: "block"
      }).to(cover, {
        x: "0%",
        ease: "power1.easeInOut",
        duration: half
      }).set(node, {
        opacity: 0
      }).to(cover, {
        x: directionTo,
        ease: "power1.easeInOut",
        duration: half
      }, `+=${wait}`);
    };

    this.vertical = ({
      node,
      props: {
        length: seconds
      },
      direction
    }) => {
      const directionTo = direction === 'up' ? '-100%' : '100%';
      const directionFrom = direction === 'up' ? '100%' : '-100%';
      const wait = 1.5;
      const half = (1 - wait) / 2;
      const cover = this.getCoverEl();
      return _gsap.default.timeline().set(cover, {
        y: directionFrom
      }).to(cover, {
        y: "0%",
        ease: "power1.easeInOut",
        duration: 0.5
      }).set(node, {
        opacity: 0,
      }).to(cover, {
        y: directionTo,
        ease: "power1.easeInOut",
        duration: half
      }, `+=${wait}`);
    };

    this.moveInDirection = ({
      props,
      direction,
      node
    }) => {
      if (direction === 'left' || direction === 'right') {
        return this.horizontal({
          props,
          direction,
          node
        });
      }

      return this.vertical({
        props,
        direction,
        node
      });
    };

    this.horizontal = this.horizontal.bind(this);
    this.vertical = this.vertical.bind(this);

  }



  render() {
    const direction = this.props.direction || 'left';
    const length = this.props.duration || 1;
    const {
      exit: removedExit,
      entry: removedEntry,
      cover: removedProp,
      ...props
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({
      exit: {
        length: length,
        trigger: ({
          exit,
          node
        }) => this.moveInDirection({
          props: exit,
          node,
          direction
        })
      },
      entry: {
        delay: length / 2
      }
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 5
      }
    }), this.props.children), /*#__PURE__*/_react.default.createElement(_.TransitionPortal, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      id: this.props.bg,
      className: "tl-cover-el",
      style: {
        position: "fixed",
        background: this.props.bg || "#4b2571",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: "100vw",
        height: "100vh",
        transform: "translateY(100%)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }
    })));
  }

}

exports.default = Cover;
//# sourceMappingURL=Cover.js.map
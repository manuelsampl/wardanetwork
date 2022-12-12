"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = SwipeOver;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("../"));

var _gsap = _interopRequireDefault(require("gsap"));

var _jsxFileName = "/Users/tyler/Documents/GitHub/gatsby-plugins/transition-link/gatsby-plugin-transition-link/src/AniLink/Swipe.js";
const boxShadow = '0 0 100px 10px rgba(0, 0, 0, 0.12941176470588237)';

const swipeTopDirection = (direction, reverse) => {
  const polarityPos = reverse ? '-' : '+';
  const polarityNeg = reverse ? '+' : '-';

  switch (direction) {
    case 'down':
      return {
        y: `${polarityPos}=100vh`,
        ease: "power1.easeIn"
      };

    case 'up':
      return {
        y: `${polarityNeg}=100vh`,
        ease: "power1.easeIn"
      };

    case 'left':
      return {
        x: `${polarityNeg}=100%`,
        ease: "power1.easeIn"
      };

    default:
      return {
        x: `${polarityPos}=100%`,
        ease: "power1.easeIn"
      };
  }
};

const swipeBottomDirection = (direction, reverse = false, offset = 40) => {
  const polarityPos = reverse ? '-' : '';
  const polarityNeg = reverse ? '' : '-';

  switch (direction) {
    case 'down':
      return {
        y: `${polarityNeg}${offset}vh`,
        ease: "power1.easeIn"
      };

    case 'up':
      return {
        y: `${polarityPos}${offset}vh`,
        ease: "power1.easeIn"
      };

    case 'left':
      return {
        x: `${polarityPos}${offset}%`,
        ease: "power1.easeIn"
      };

    default:
      return {
        x: `${polarityNeg}${offset}%`,
        ease: "power1.easeIn"
      };
  }
};

const swipe = ({
  node,
  exit,
  direction,
  top,
  triggerName,
  entryOffset
}) => {
  const scrollTop = document.scrollingElement && document.scrollingElement.scrollTop || document.body.scrollTop || window.pageYOffset;

  if (triggerName === 'entry' && top === 'entry') {
    return _gsap.default.timeline().set(node, {
      boxShadow: boxShadow,
      overflowY: 'hidden',
      height: '100vh',
      scrollTop: scrollTop
    }).from(node, { ...swipeTopDirection(direction, true),
      duration: exit.length
    }).set(node, {
      overflowY: 'initial'
    });
  } else if (triggerName === 'entry') {
    return _gsap.default.timeline().from(node, { ...swipeBottomDirection(direction, false, entryOffset),
      duration: exit.length
    });
  } else if (triggerName === 'exit' && top === 'exit') {
    return _gsap.default.timeline().set(node, {
      boxShadow: boxShadow,
      overflowY: 'hidden',
      height: '100vh',
      scrollTop: scrollTop
    }).to(node, { ...swipeTopDirection(direction),
      duration: exit.length
    }).set(node, {
      overflowY: 'initial'
    });
  } else {
    return _gsap.default.timeline().set(node, {
      boxShadow: boxShadow,
      overflowY: 'hidden',
      height: '100vh',
      scrollTop: scrollTop
    }).to(node, { ...swipeBottomDirection(direction, true, entryOffset),
      duration: exit.length
    }).set(node, {
      overflowY: 'initial'
    });
  }
};

function SwipeOver({
  exit,
  entry,
  swipe: removedProp,
  entryOffset = 40,
  ...props
}) {
  const top = props.top || 'exit';
  const exitLength = props.duration || 0.7;
  const entryLength = exitLength / 3.5;
  const entryZ = top === 'entry' ? 1 : 0;
  const exitZ = top === 'exit' ? 1 : 0;
  return /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({
    exit: {
      length: exitLength,
      trigger: ({
        node,
        exit
      }) => swipe({
        node,
        exit,
        direction: props.direction,
        top: top,
        entryOffset,
        triggerName: 'exit'
      }),
      zIndex: exitZ
    },
    entry: {
      length: entryLength,
      trigger: ({
        node,
        exit
      }) => swipe({
        node,
        exit,
        direction: props.direction,
        top: top,
        entryOffset,
        triggerName: 'entry'
      }),
      zIndex: entryZ
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 3
    }
  }), props.children);
}
//# sourceMappingURL=Swipe.js.map
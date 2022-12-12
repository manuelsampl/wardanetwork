"use strict";

exports.__esModule = true;
exports.useTriggerTransition = void 0;

var _react = require("react");

var _gatsby = require("gatsby");

var _createTransitionContext = require("../context/createTransitionContext");

var _triggerTransition = require("../utils/triggerTransition");

const useTriggerTransition = defaultOptions => {
  const context = (0, _react.useContext)(_createTransitionContext.Context);

  const programmaticallyTriggerTransition = calledOptions => {
    // allow passing an event directly instead of options
    if (calledOptions instanceof Event || calledOptions.nativeEvent && calledOptions.nativeEvent instanceof Event) {
      calledOptions = {
        event: calledOptions
      };
    }

    const options = { ...defaultOptions,
      ...calledOptions
    };

    if (context.disableAnimation) {
      // If the user has set their browser or OS to prefers-reduced-motion
      // we should respect that.
      if (options.event) {
        options.event.persist();
        options.event.preventDefault();
      }

      (0, _gatsby.navigate)(options.to);
    } else {
      (0, _triggerTransition.triggerTransition)({ ...context,
        ...options
      });
    }
  };

  return programmaticallyTriggerTransition;
};

exports.useTriggerTransition = useTriggerTransition;
//# sourceMappingURL=useTriggerTransition.js.map
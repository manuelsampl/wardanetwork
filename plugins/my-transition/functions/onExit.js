"use strict";

exports.__esModule = true;
exports.onExit = void 0;

const onExit = ({
  node,
  inTransition,
  exitTrigger,
  entryProps,
  exitProps,
  triggerResolve,
  e
}) => {
  if (!inTransition) return;
  const {
    trigger: removed,
    ...exitPropsTrimmed
  } = exitProps;
  triggerResolve.exit({ ...exitPropsTrimmed,
    node
  });
  return exitTrigger && typeof exitTrigger === 'function' && exitTrigger({
    entry: entryProps,
    exit: exitProps,
    node,
    e
  });
};

exports.onExit = onExit;
//# sourceMappingURL=onExit.js.map
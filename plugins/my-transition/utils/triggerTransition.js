"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.triggerTransition = void 0;

var _gatsby = require("gatsby");

var _requestanimationframeTimer = require("requestanimationframe-timer");

var _secondsMs = require("./secondsMs");

var _getPagesPromises = _interopRequireDefault(require("./getPagesPromises"));

const triggerTransition = ({
  to,
  event = null,
  exit = {},
  entry = {},
  inTransition,
  pages,
  trigger,
  updateContext,
  linkState,
  replace,
  preventScrollJump
}) => {
  if (event) {
    event.persist();
    event.preventDefault();
  }

  if (inTransition) return false;
  let hash; // handle anchor links to ID's

  if (to.includes('#')) {
    const toSplit = to.split('#');
    to = toSplit[0];
    hash = toSplit[1];
  } // these globals prevent the back button from being pressed during a transition as that can have unexpected results


  window.__tl_inTransition = true;
  window.__tl_desiredPathname = (0, _gatsby.withPrefix)(to);
  updateContext({
    inTransition: true,
    exitDelay: 0,
    exitLength: 0,
    appearAfter: 0,
    exitState: {}
  });

  if (trigger && typeof trigger === 'function') {
    trigger(pages);
  }

  const {
    length: exitLength = 0,
    delay: exitDelay = 0,
    state: exitState = {},
    trigger: exitTrigger = () => {}
  } = exit;
  const {
    length: entryLength = 1,
    // this allows scrollposition to be reset when there is no transition.
    delay: entryDelay = 0,
    state: entryState = {},
    trigger: entryTrigger = () => {},
    appearAfter = 0
  } = entry;
  updateContext({
    entryLength: entryLength,
    entryDelay: entryDelay,
    exitLength: exitLength,
    exitDelay: exitDelay,
    entryProps: entry,
    exitProps: exit,
    appearAfter,
    preventScrollJump,
    exitTrigger: (exit, node, e) => exitTrigger(exit, node, e),
    entryTrigger: (entry, node, e) => entryTrigger(entry, node, e),
    e: event
  }); // after exitDelay

  (0, _requestanimationframeTimer.setTimeout)(() => {
    (0, _gatsby.navigate)(to, {
      state: { ...linkState
      },
      replace
    });
    updateContext({
      exitState: exitState,
      hash
    });
  }, (0, _secondsMs.getMs)(exitDelay));
  (0, _requestanimationframeTimer.setTimeout)(() => {
    // wait for entryDelay before we add entry state
    updateContext({
      entryState: entryState
    });
  }, (0, _secondsMs.getMs)(exitDelay + entryDelay)); // reset entry animation times so they dont apply when using browser back/forward.
  //  this will be replaced with a better solution in the future

  (0, _requestanimationframeTimer.setTimeout)(() => updateContext({
    entryDelay: 0,
    appearAfter: 0,
    entryLength: 0
  }), (0, _secondsMs.getMs)(exitDelay + entryDelay + entryLength));
  const finalResetSeconds = exitDelay + Math.max(exitLength, entryDelay + entryLength); // reset exit animation times so they dont apply when using browser back/forward.
  //  this will be replaced with a better solution in the future

  (0, _requestanimationframeTimer.setTimeout)(() => {
    // these globals prevent the back button from being pressed during a transition as that can have unexpected results
    window.__tl_inTransition = false;
    window.__tl_desiredPathname = false;
    window.__tl_back_button_pressed = false;
    updateContext({
      exitDelay: 0,
      exitLength: 0,
      // Once all animation is finished, it's safe to start a new animation since we're no longer inTransition.
      inTransition: false,
      // create new page promises for the trigger prop
      ...(0, _getPagesPromises.default)()
    });
  }, (0, _secondsMs.getMs)(finalResetSeconds) + 1);
};

exports.triggerTransition = triggerTransition;
//# sourceMappingURL=triggerTransition.js.map
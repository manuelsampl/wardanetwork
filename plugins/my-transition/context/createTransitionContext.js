"use strict";

exports.__esModule = true;
exports.publicContext = exports.PublicConsumer = exports.PublicProvider = exports.Context = exports.Consumer = exports.Provider = void 0;

var _react = require("react");

const Context = /*#__PURE__*/(0, _react.createContext)();
exports.Context = Context;
const {
  Provider,
  Consumer
} = Context;
exports.Consumer = Consumer;
exports.Provider = Provider;
const publicContext = /*#__PURE__*/(0, _react.createContext)();
exports.publicContext = publicContext;
const {
  Provider: PublicProvider,
  Consumer: PublicConsumer
} = publicContext;
exports.PublicConsumer = PublicConsumer;
exports.PublicProvider = PublicProvider;
//# sourceMappingURL=createTransitionContext.js.map
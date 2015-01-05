"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var foo = _interopRequire(require("./modules/foo"));

var bar = _interopRequire(require("./modules/bar"));

console.log("from module foo >> ", foo);
console.log("from module bar >> ", bar);
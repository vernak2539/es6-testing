"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var foo = _interopRequire(require("./imports/foo"));

var bar = _interopRequire(require("./imports/bar"));

var square = require("./imports/lib").square;
var diag = require("./imports/lib").diag;
var test = require("./imports/lib").square;


console.log("from module foo >> ", foo);
console.log("from module bar >> ", bar);

console.log("square of 10 is " + square(10));
console.log("diagonal of 9x9 is " + diag(9, 9));
console.log("remaning square to test " + test(11));
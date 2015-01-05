"use strict";

var _slice = Array.prototype.slice;
var _slicedToArray = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }
};

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

(function (window) {
  "use strict";

  // objects
  function objectDeconstruction() {
    var obj = {
      test: "alex",
      otherTest: "vernacchia"
    };

    // deconstructing object
    var first = obj.test;
    var last = obj.otherTest;
    console.log(first + " " + last);

    // or
    var _test = obj.test;
    var otherTest = obj.otherTest;
    console.log(_test + " " + otherTest);
  }
  objectDeconstruction();

  // arrays
  function arrayDeconstruction() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var _arr = _toArray(arr);

    var one = _arr[0];
    var two = _arr[1];
    var others = _toArray(_arr).slice(2);

    console.log(one, two, others);

    // swapping without 3rd variable
    var _ref = [two, one];

    var _ref2 = _slicedToArray(_ref, 2);

    one = _ref2[0];
    two = _ref2[1];
    console.log(one, two, others);

    // defaults
    var _ref3 = ["a"];

    var _ref3 = _slicedToArray(_ref3, 2);

    var x = _ref3[0];
    var y = _ref3[1];
    console.log(x, y); // y === undefined

    // let [r,s=10] = ['a']; // s should be 10 but doesn't work in FF (5/1/15)
    // console.log(r,s);
  }
  arrayDeconstruction();

  // functions
  // allow for default param value
  function testParam(x) {
    var y = arguments[1] === undefined ? 5 : arguments[1];
    return x * y;
  }
  console.log(testParam(10));

  // trailing params
  function trailingParams(x) {
    var other = _slice.call(arguments, 1);

    return [x, other];
  }
  console.log(trailingParams(1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 8, 7, 6));

  // block scope, will get a reference error becuase b only exists inside if
  function test(x, y) {
    if (x === "test") {
      var _b = "testing this let";
    }
    return b === "testing this let";
  }
  test("testing");
})(window);
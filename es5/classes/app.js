"use strict";

var _inherits = function (child, parent) {
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

(function () {
  // chrome canary
  "use strict";

  // basic class
  var Car = function Car(make, year) {
    this.make = make;
    this.year = year;
  };

  Car.prototype.getInfo = function () {
    return this.year + " " + this.make;
  };

  var CarTest = new Car("chevy", 2014);
  console.log(CarTest.getInfo());

  // chevy inherits from car, or extends car
  var Chevy = (function () {
    var _Car = Car;
    var Chevy = function Chevy(make, year, color) {
      _Car.call(this, make, year);
      this.color = color;
      this.parent = "General Motors";
    };

    _inherits(Chevy, _Car);

    Chevy.prototype.toString = function () {
      return this.year + " " + this.color + " " + this.make + " made by " + this.parent;
    };

    return Chevy;
  })();

  var ChevyTest = new Chevy("chevy", 2014, "black");
  console.log(ChevyTest.toString());
})(window);
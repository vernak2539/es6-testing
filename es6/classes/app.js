(function() {
    // chrome canary
    'use strict';

    // basic class
    class Car {
        constructor( make, year ) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return this.year + ' ' + this.make;
        }
    }

    var CarTest = new Car( 'chevy', 2014 );
    console.log(CarTest.getInfo());

    // chevy inherits from car, or extends car
    class Chevy extends Car {
        constructor( make, year, color ) {
            super(make, year);
            this.color = color;
            this.parent = 'General Motors';
        }
        toString() {
            return this.year + ' ' + this.color + ' ' + this.make + ' made by ' + this.parent;
        }
    }

    var ChevyTest = new Chevy( 'chevy', 2014, 'black' );
    console.log(ChevyTest.toString());

})(window)

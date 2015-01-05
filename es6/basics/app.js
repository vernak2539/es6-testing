(function(window) {
    'use strict';

    // objects
    function objectDeconstruction() {
        let obj = {
            test: 'alex'
            , otherTest: 'vernacchia'
        };

        // deconstructing object
        let { test: first, otherTest: last } = obj;
        console.log(first + ' ' + last);

        // or
        let { test, otherTest } = obj;
        console.log(test + ' ' + otherTest);
    }
    objectDeconstruction();

    // arrays
    function arrayDeconstruction() {
        let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        let [one, two, ...others] = arr;
        console.log( one, two, others );

        // swapping without 3rd variable
        [one, two] = [two, one];
        console.log( one, two, others );

        // defaults
        let [x,y] = ['a'];
        console.log(x, y); // y === undefined

        // let [r,s=10] = ['a']; // s should be 10 but doesn't work in FF (5/1/15)
        // console.log(r,s);
    }
    arrayDeconstruction();

    // functions
    // allow for default param value
    function testParam( x, y = 5 ) {
        return x * y;
    }
    console.log( testParam( 10 ) );

    // trailing params
    function trailingParams( x, ...other ) {
        return [x, other];
    }
    console.log( trailingParams(1,2,3,4,4,5,6,7,7,8,8,7,6) );

    // block scope, will get a reference error becuase b only exists inside if
    function test(x, y) {
        if( x === 'test' ) {
            let b = 'testing this let';
        }
        return b === 'testing this let';
    }
    test('testing');

})(window)

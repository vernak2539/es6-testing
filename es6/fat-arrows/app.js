(function(window) {
    'use strict';

    // =>, new token
    // param => expression
    // (param [, param]) => expression
    // param => { statements; }
    // (param [, param]) => { statements; }
    // () => expression
    // () => { statements; }
    // ([param]) => ({ key: value })

    // Example
    // - from:
    var testFunc = function( param ) {
        return param.split( ' ' );
    }
    // - to:
    var testFuncEs6 = param => param.split( ' ' );

    console.log(testFuncEs6('Alex Vernacchia'));
    console.log(testFuncEs6.prototype); // should be undefined
    console.log((x => x * 10)( 11 ));

    // scope issues
    function Student(data) {
        this.name = data.name || "Alex";
        this.age = data.age || 25;

        this.getInfo = function() {
            return this.name + ", " + this.age;
        };

        // inside timeout, this === window;
        this.sayHi = function() {
            window.setTimeout(function() {
                console.log( this );
            }, 100 );
        };

        // inside timeout, this === Student
        this.sayHiScoped = function() {
            window.setTimeout( () => {
                console.log( this );
            }, 100 );
        };
    }

    let Alex = new Student({ name: "Alex", age: 26 });
    console.log(Alex.getInfo());
    Alex.sayHi();
    Alex.sayHiScoped();

    var arr = ['a', 'a', 'b', 'c', 'd', 'e'];
    arr.forEach(letter => {
        console.log(letter);
    });
})(window || global);

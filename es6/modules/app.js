import foo from './imports/foo';
import bar from './imports/bar';
import { square, diag } from './imports/lib';
import { square as test } from './imports/lib';

console.log('from module foo >> ', foo);
console.log('from module bar >> ', bar);

console.log('square of 10 is ' + square(10));
console.log('diagonal of 9x9 is ' + diag(9, 9));
console.log('remaning square to test ' + test(11));

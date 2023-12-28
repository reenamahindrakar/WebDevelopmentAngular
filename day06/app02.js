//ES6 code modification
//string interpolation
var nm = 'abc';
var cd = 'xyz';
console.log('Name is : ' + nm + ' ' + cd); //concat prior to ES6
// ES6 -> ECMAScript 6 -> 2015
//string interpolation
console.log("Name is ".concat(nm));
console.log("Name is ".concat(nm, " ").concat(cd));
console.log("Square of 2 ".concat(2 * 2));

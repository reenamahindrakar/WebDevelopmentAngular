var fn = function (n) { return n * n; };
fn(2);
var fn1 = function (n) { return n * n; };
fn(2);
// arrow function or lambda function
function abc() { console.log("Normal Function"); }
abc();
var fn2 = function () { console.log("Anonymous Function"); };
fn2();
// es6 => arrow function
var fn3 = function () { return console.log("Anonymous Function"); };
fn3();
var fn4 = function (n) {
    return n * n;
};
fn4(2);
var fn5 = function (nm) {
    if (nm == 'a')
        return 10;
    if (nm == 'b')
        return nm;
    return false;
};
console.log(fn5('a'));
var fn6 = function (jhhfhjfjhg) {
    if (jhhfhjfjhg == 'a')
        return 10;
    if (jhhfhjfjhg == 'b')
        return jhhfhjfjhg;
    return false;
};
console.log(fn6('c'));
console.log(fn6('b'));
var fn7 = function (nm) { return 'abc'; };
console.log(fn7('b'));

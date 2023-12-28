//typescript any and mixed type
//mixed type
var num = 10;
num = 'abc';
console.log('num is:' + num);
console.log("num is ".concat(num));
//any type
var nm1 = 'abc';
nm1 = 10;
nm1 = true;
nm1 = { a: 10, b: 'abc' };
console.log(nm1);
console.log('value of nm1:' + nm1);
console.log('value of nm1:' + nm1.a + ' ' + nm1.b);
console.log("value of nm1 ".concat(nm1));
console.log("value of nm1 ".concat(nm1.a, " ").concat(nm1.b));

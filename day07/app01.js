// functions
function sayHello() {
    console.log('Hello');
}
sayHello(); // function call
var fn = sayHello; // refering to sayHello, not call
fn(); // function call
//anonomyous function
var fn1 = function () {
    console.log("This is anonomyous function");
};
fn1();

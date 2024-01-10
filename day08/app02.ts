var fn = (n: number) => n * n
fn(2)
var fn1: (n: number) => number = (n: number) => n * n

fn(2)

// arrow function or lambda function

function abc() { console.log(`Normal Function`) }
abc()
var fn2 = function() { console.log(`Anonymous Function`) }
fn2()
// es6 => arrow function
var fn3 = () => console.log(`Anonymous Function`)
fn3()
var fn4: (n: number) => number = function(n: number) {
    return n * n
}

fn4(2)
type SpecialFn = (nm : string) => number | string | boolean

var fn5: (nm : string) => number | string | boolean = function(nm: string) {
    if(nm == 'a') return 10
    if(nm == 'b') return nm
    return false
}

console.log(fn5('a'))
var fn6: (nm : string) => number | string | boolean = (jhhfhjfjhg: string) => {
    if(jhhfhjfjhg == 'a') return 10
    if(jhhfhjfjhg == 'b') return jhhfhjfjhg
    return false
}
console.log(fn6('c'))
console.log(fn6('b'))

var fn7: SpecialFn = (nm: string) => 'abc'
console.log(fn7('b'))
//typescript any and mixed type
//mixed type
var num : number | string = 10
num = 'abc'
console.log('num is:' + num)
console.log(`num is ${num}`)

//any type
var nm1 : any = 'abc'
nm1 = 10
nm1 = true
nm1 = {a : 10, b : 'abc'}
console.log(nm1)
console.log('value of nm1:' + nm1)
console.log('value of nm1:' + nm1.a + ' ' + nm1.b)
console.log(`value of nm1 ${nm1}`)
console.log(`value of nm1 ${nm1.a} ${nm1.b}`)
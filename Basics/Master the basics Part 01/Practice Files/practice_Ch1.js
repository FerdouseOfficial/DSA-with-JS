// let a = 10;
// let b = 20;

// Type Convertion first thing we learn

// console.log(a+b);

// let _a = '11';
// let _b = "15";

// console.log(_a+_b);

// let c = 20;
// let d = '22';

// console.log(c + d);

//! remember when we add string with number its called concatination not addition

// Type Casting

// let age = Number(prompt("Enter Your age:- "));
// console.log(typeof age);

//! 3 methods of swapping values

// way 01
// let a = 10;
// let b = 20;
// let c;

// c = a;
// a = b;
// b = c

// console.log(c)
// console.log(a)
// console.log(b)

// way 02

//a = a + b; // 30
//b = a - b; // 10
// = a -b // 20

//console.log(a, b)

// way 03 :- little advance tree structure

// [a,b] = [b,a]
// console.log(a,b)

//! Operators

// arithmetic operatoras
// +,-,*,/

// always try to use Math.floor when you perform division okay

// let a = 12;
// let b = 22;

// console.log(Math.floor(b/a)) // it will show the bhagfol
// when we use divide(/) sign we get the quotient and when we use modulus we get remainder

// also another way name is MOD(%)
// console.log(a%b)

// Relational Operator
// ">, <, >=, <=, !=, !==(strictly not), ==, ==="

// Logical Operator
// "&&, ||, !"

// Unary Operator
// "++, --"

// let practice now

// let i = 11;
// i = i++ +  ++i
// console.log(i)

// let a = true;
// a++ // the answer will be 2
// console.log(a)

// let b = 12++ //we can't do it  because its a constant. we can't use it directly on variable
// console.log(b)

// let i = 11;
// let j = --(i++) // we also can't use it like that it will through and error. here is the same problem we can't use Unary operator directly on a constant
// console.log(j)

//! Math Functions
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc() // remove the decimal part
// Math.pow()
// Math.sqrt()
// Math.cbrt()
// Math.abs()
// Math.max()
// Math.min()
// Math.random()
// toFixed()

console.log(Math.trunc(Math.random()*9000+1000));

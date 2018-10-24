/* Boolean */

const isActive = false;
const hasChildren = true;

console.log(typeof isActive);
console.log(typeof hasChildren);

/* undefined and null */

let undefinedVariable;
const emptyVariable = null;
console.log(undefinedVariable);
console.log(emptyVariable);
console.log(undeclaredVariable);

/* Strings */

// 1.
console.log(typeof 'some string');
const country = 'Ukraine';
const city = 'Kyiv';
const message1 = 'I live in ' + city + ', ' + country;
const message2 = `I live in ${city}, ${country}`;

console.log(message1);

console.log(message2);

// 2.
const greeting = 'Welcome to FE Advanced!';

console.log(greeting.length);

console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

console.log(greeting.indexOf('to'));
console.log(greeting.indexOf('hello'));

console.log(greeting.includes('welcome'));
console.log(greeting.includes('Welcome'));

/* Numbers */

// 1.

console.log(typeof 50);
console.log(typeof Infinity);

console.log(typeof '100');
console.log(typeof +'100');
console.log(typeof Number('100'));

console.log(`Number.parseInt('5px'):`, Number.parseInt('5px'));
console.log(`Number.parseInt('12aaa'):`, Number.parseInt('12aaa'));
console.log(`Number.parseInt('12.46aa77'):`, Number.parseInt('12.46aa77'));
console.log(`Number.parseInt('some string'):`, Number.parseInt('some string'));
console.log(`Number.parseFloat('5px'):`, Number.parseFloat('5px'));
console.log(`Number.parseFloat('12aaa32'):`, Number.parseFloat('12aaa32'));
console.log(`Number.parseFloat('12.46aaa12'):`, Number.parseFloat('12.46aaa12'));
console.log(`Number.parseFloat('some string'):`, Number.parseFloat('some string'));

// 2.

const sum = 5 + '5';
console.log(sum);

const sum1 = 5 + '5' + 5;
console.log(sum1);

const sum2 = 5 + 5 + '5';
console.log(sum2);

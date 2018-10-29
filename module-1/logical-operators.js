console.log(1 === 1);
console.log(1 === '1');
console.log(1 == '1');

console.log(false === 0);
console.log(false == 0);
console.log('hello'.length === 5);
console.log('hello'.length == '5');
console.log(''.length === false);
console.log(''.length == false);

console.log(5 > 6);
console.log(5 < 6);
console.log(5 >= 6);
console.log(5 <= 6);

console.log(6 <= 6);
console.log(6 >= 6);

console.log(5 !== 6);
console.log(5 !== 5);

console.log(!'hello'.length);
console.log(!''.length);

/* &&, || */

console.log(false && true);
console.log(false || true);
console.log(true && false);
console.log(true || false);

console.log(0 && 1);
console.log(0 || 1);
console.log(1 && 0);
console.log(1 || 0);

const message = 'Hello world';
message.length && console.log(message);

console.log(message.includes('Hello') && message.includes('world') && message);

const userName = prompt('What is your name?') || 'user name';
console.log(userName);

const childHeight = Number(prompt('What is your height?'));

if (isNaN(childHeight)) {
  alert('You have entered not a number!');
}

if (childHeight > 100 && childHeight < 150) { //block
  alert('Enjoy!');
} else if (childHeight < 100) {
  alert('Grow up!');
} else if (childHeight > 150) {
  alert('You are giant!');
} else {
  console.log(childHeight);
}

const statuses = {
  WORKS: 'WORKS', //constanta
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  AWAIT: 'AWAIT',
};

const currentStatus = statuses.AWAIT;
switch (currentStatus) {
  case statuses.WARNING:
    console.log(statuses.WARNING);
    break;
  case statuses.ERROR:
    console.log(statuses.ERROR);
    break;
  case statuses.AWAIT:
    console.log(statuses.AWAIT);
    break;
  default:
    console.log(statuses.WORKS);
    break;
}

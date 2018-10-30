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

const a = false ? 'true' : 'false';
const b = true ? 40 : 'false';
const c = a ? 50 : b;

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
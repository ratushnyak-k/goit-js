const user = {
  name: 'John',
  age: 33,
};

const userName = () => user.name;
const userAge = () => {
  return user.age;
};

const arr = ['john', 'David', 'BRAD'];

const arr1 = [{ name: 'john' }, { name: 'David' }, { name: 'BRAD' }];

function map(array, handler) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(handler(array[i]));
  }
  return newArr;
}

map(arr, function(item) {
  return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});

const a = 1;

function f() {
  console.log(a);
  return function() {
    console.log(a);
  };
}
f();

function makeCounter() {
  let currentCount = 1;

  return function() {
    return currentCount++;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = makeCounter();
console.log(counter2());

const mappedHtml = dataBase.map((item) => {
  const div = document.createElement('root');
  div.innerHTML = `
    <div class="full-name">${item.name}</div>
    <div class="nick-name">${item.username}</div>
    <div class="email">${item.email}</div>
    <div class="address">${item.address.street}</div>
    <div class="phone">${item.phone}</div>
  `;
  return div;
});

for (let i = 0; i < mappedHtml.length; i++) {
  document.body.appendChild(mappedHtml[i]);
}

const user = {
  name: 'John',
  age: 33,
};

const userName = () => user.name;
const userAge = () => {
  return user.name;
};

/* Callback */
const arr = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'David', lastName: 'Green' },
  { firstName: 'John', lastName: 'Green' },
  { firstName: 'Jack', lastName: 'Black' },
  { firstName: 'Jack', lastName: 'Black' },
  { firstName: 'Jack', lastName: 'Black' },
];
const arr1 = [{ name: 'bill' }, { name: 'den' }, { name: 'cris' }];
function map(array, handler) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const obj = handler(array[i]);
    newArr.push(obj);
  }
  return newArr;
}
function filter(array, handler) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (handler(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const userFinder = (value) => {
  return function(item) {
    return item.firstName.includes(value);
  };
};

console.log(filter(arr, userFinder(prompt('Name'))));
console.log(filter(arr, userFinder(prompt('Name'))));
console.log(filter(arr, userFinder(prompt('Name'))));
console.log(filter(arr, userFinder(prompt('Name'))));
console.log(filter(arr, userFinder(prompt('Name'))));

function createFullName(item) {
  return {
    fullName: `${item.firstName} ${item.lastName}`,
  };
}

function itemToUpperCase(item) {
  return { name: item.name.toUpperCase() };
}

console.log(map(arr, createFullName));
console.log(map(arr1, itemToUpperCase));
console.log(arr.map(createFullName));
console.log(arr1.map(itemToUpperCase));

const capitalize = function(item) {
  return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
};

const antiCapitalize = function(item) {
  return item.charAt(0).toLowerCase() + item.slice(1).toUpperCase();
};

map(arr, capitalize);
map(arr1, capitalize);
map(arr, antiCapitalize);
map(arr1, antiCapitalize);

/* */

const a = 1;

function f() {
  console.log(a);
  return function() {
    console.log(a);
  };
}

console.log(f()());

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
console.log(counter2());
console.log(counter2());

function pow(x, n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = x * i;
  }
}

pow(2, 3);

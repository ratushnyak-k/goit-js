let a = 5;
let b = a;
a = 10;

const obj1 = { name: 'John' };
const obj2 = obj1;
obj1.name = 'Jim';
obj2.name = 'James';

const arr = ['Apple', 'Orange', 'Banana'];
const arr1 = arr;

arr.push('Melon');

const user = {
  name: 'John Doe',
  age: 5,
  city: 'Kyiv',
  getNameES5: function() {
    return user.name;
  },
  getNameES6() {
    return user.name;
  },
};

const { name, age, birth } = user;

console.log(name, age, birth);

function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log('My name is: ' + this.name);
  };
}

const john = new User('John');

john.sayHi();

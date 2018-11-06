while (true) {
  alert('Hi!');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

const obj = {
  a: 1,
  c: 3,
  b: 2,
  d: 4,
};

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

const obj1 = {
  '1': 1,
  '11': 5,
  '10': 4,
  '2': 2,
  '3': 3,
};

for (let key in obj1) {
  console.log(key, obj1[key]);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((item) => {
  console.log(item);
});

const arr1 = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 7 },
];

arr1.forEach((item) => {
  console.log(item);
});

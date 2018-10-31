console.log(typeof []);
console.log(Array.isArray([]));
console.log(Array.isArray(''));

const arr = ['Apple', 'Pen', 'Pineapple'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.length);
console.log(arr[0].length);
console.log(arr[3]);

console.log(arr.join(''));
console.log(arr.join(', '));
console.log(arr.join(' + '));

const stringTemplate = 'one, two,three,  four';
console.log(stringTemplate.split(','));

const frameworks = ['React', 'Angular', 'Polymer', 'Vue'];

console.log(frameworks.indexOf('React'));
console.log(frameworks.indexOf('Ember'));

console.log(frameworks.includes('Vue'));
console.log(frameworks.includes('Rx.js'));

frameworks.push('Backbone');
frameworks.pop();
frameworks.shift();
frameworks.unshift('Express');

console.log([...frameworks, 'Vue']);
console.log(['Vue', ...frameworks]);
console.log(['Vue', ...frameworks,  'Rx.js']);

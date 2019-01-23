// several listeners, removeEventListener
// event object, target, currentTarget
// bubbling, capture phase, 3rd argument, stopPropagation
// preventDefault
// delegation

//const button = document.querySelector('button');
//
//const listener = (event) => {
//  console.log(event);
//};
//
//button.addEventListener('click', listener);

/****/

//const parent = document.querySelector('#parent');
//const child = document.querySelector('#child');
//const innerChild = document.querySelector('#inner-child');
//
//const parentClickHandler = () => console.log('PARENT');
//const childClickHandler = () => console.log('CHILD');
//const innerClickChildHandler = (e) => {
//  e.stopPropagation();
//  console.log('INNER CHILD');
//};
//
//parent.addEventListener('click', parentClickHandler);
//child.addEventListener('click', childClickHandler);
//innerChild.addEventListener('click', innerClickChildHandler);

//const ul = document.querySelector('ul');
//
//ul.addEventListener('click', (e) => {
//  console.log(e.target.innerText);
//});

//const ul = document.createElement('ul');
//document.body.appendChild(ul);
//const LIs = users
//  .map((user) => {
//    return `
//    <li data-id="${user.id}">
//      <div>
//        ${user.name.first}
//        <button data-id="${user.id}">X</button></div>
//    </li>
//  `;
//  })
//  .join('');

//ul.innerHTML = LIs;
//
//ul.addEventListener('click', (event) => {
//  if (event.target.nodeName === 'BUTTON') {
//    console.log(event.target.closest('li'));
//  }
//});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
});

const a = document.querySelector('a');

a.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e);
});

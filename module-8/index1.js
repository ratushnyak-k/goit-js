class User {
  constructor(data) {
    this.name = data.name.first;
    this.email = data.email;
    this.age = data.dob.age;
  }
}

const generateTemplate = ({ name, email, age }) => {
  return `
    <li>
      <div>
        <div class="name">${name}</div>
        <div class="email">${email}</div>
        <div class="age">${age}</div>
        <button class="edit">Edit</button>
        <button>Delete</button></div>
    </li>
  `;
};

const LIs = users
  .map((userData) => new User(userData))
  .map(generateTemplate)
  .join('');

const UL = document.querySelector('ul#users');
UL.innerHTML = LIs;

const form = document.querySelector('form');

const editUser = (e) => {
  e.preventDefault();
  const fields = e.target.querySelectorAll('[name]');
  const formData = {};
  fields.forEach((field) => {
    formData[field.name] = field.value;
  });
  UL.innerHTML = UL.innerHTML + generateTemplate(formData);
};

form.addEventListener('submit', editUser);

UL.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    const elementData = {};
    e.target
      .closest('li')
      .querySelectorAll('div[class]')
      .forEach((element) => {
        console.log(element);
        elementData[element.getAttribute('class')] = element.innerText;
      });
    console.log(elementData);
  }
});

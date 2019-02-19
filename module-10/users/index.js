const characters = new CharactersList(document.querySelector('#users'));

characters.fetchCharacters();

const form = document.querySelector('form');
const next = document.querySelector('#next');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  characters.clearNode();
  characters.toInitialQueries();
  characters.fetchCharacters({ nameStartsWith: e.target.querySelector('input').value });
});

next.addEventListener('click', (e) => {
  e.preventDefault();
  characters.fetchCharacters({}, true);
});

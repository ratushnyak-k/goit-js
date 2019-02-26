const routes = {
  '/': {
    path: '/',
    title: 'List of Characters',
    view: '#home-page-view',
  },
  '/character-detail': {
    path: '/character-detail',
    title: 'Character details',
    view: '#details-page-view',
  },
};
document.addEventListener('DOMContentLoaded', () => {
  const users = document.querySelector('#users');
  const characterList = new CharactersList(users);
  characterList.fetchCharacters();

  const next = document.querySelector('#next');
  const form = document.querySelector('form');

  users.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const template = document.querySelector('#modal-content-template').innerHTML;
      fetch(`${baseUrl}/${e.target.id}?apikey=c0ae1868f2a792f14b56bf90b1525065`)
        .then((res) => res.json())
        .then((res) => res.data.results[0])
        .then((item) => {
          document.querySelector('.modal-dialog').innerHTML = Handlebars.compile(template)(
            new Character(item)
          );
        });
    }
  });
  next.addEventListener('click', (e) => {
    e.preventDefault();
    characterList.fetchCharacters({}, true);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    characterList.toInitialQueries();
    characterList.clearNode();

    const data = {};
    if (input.value) {
      data.nameStartsWith = input.value;
    }
    characterList.fetchCharacters(data);
  });

  const navigation = document.querySelector('#navigation > ul');
  navigation.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
      e.preventDefault();
      const { path, title } = routes[e.target.getAttribute('data-route-key')];

      history.pushState('', title, path);
      router(path);
    }
  });
  const navItemTemplate = document.querySelector('#navigation-item-template').innerHTML;

  navigation.insertAdjacentHTML(
    'beforeEnd',
    Object.keys(routes)
      .map((route) => {
        const template = Handlebars.compile(navItemTemplate);
        return template(routes[route]);
      })
      .join('')
  );
});

window.addEventListener('popstate', () => {
  router(window.location.pathname);
});

function router(path) {
  const app = document.querySelector('#app');
  app.innerHTML = `<h1>${routes[path].view}</h1>`;
}

class Character {
  constructor({ id, name, thumbnail }) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;
  }

  get photo() {
    const { path, extension } = this.thumbnail;
    return `${path}.${extension}`;
  }

  get template() {
    const html = document.querySelector('#character-template').innerHTML;
    return Handlebars.compile(html)(this);
  }
}

class Renderer {
  constructor(node, template) {
    this.node = node;
    this.template = template;
  }

  clearNode() {
    this.node.innerHTML = '';
  }

  render() {
    this.node.insertAdjacentHTML('beforeEnd', this.template);
  }
}

function fetchList(baseUrl, Class, queries) {
  return new Promise((resolve) => {
    const cache = localStorage.getItem(Qs.stringify(queries));
      if (cache) {
      resolve(JSON.parse(cache));
      return;
    }

    fetch(`${baseUrl}?${Qs.stringify(queries)}`)
      .then((response) => response.json())
      .then((res) => resolve(res.data.results));
  });
}

const baseUrl = 'https://gateway.marvel.com/v1/public/characters';

class CharactersList extends Renderer {
  constructor(node) {
    super(node);
    this.initQueries = {
      limit: 10,
      offset: 0,
      apikey: 'c0ae1868f2a792f14b56bf90b1525065',
    };
    this.toInitialQueries();
  }

  toInitialQueries() {
    this.queries = { ...this.initQueries };
  }

  fetchCharacters(newQueries = {}, isNext) {
    this.queries = { ...this.queries, ...newQueries };
    if (isNext) {
      this.queries.offset = this.queries.offset + this.initQueries.limit;
    }

    fetchList(baseUrl, Character, this.queries).then((list) => {
      this.template = list.map((item) => new Character(item).template).join('');
      this.render();
      this.save(list);
    });
  }

  save(data) {
    localStorage.setItem(Qs.stringify(this.queries), JSON.stringify(data));
  }
}

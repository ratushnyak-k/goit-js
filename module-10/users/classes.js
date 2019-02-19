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
    return `  
      <div class="col-6">
        <div class="card">
          <img src="${this.photo}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
          </div>
        </div>
      </div>
    `;
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
  return fetch(`${baseUrl}?${Qs.stringify(queries)}`)
    .then((response) => response.json())
    .then((res) => res.data.results)
    .then((list) => list.map((item) => new Class(item)));
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

  fetchCharacters(newQueries, isNext) {
    this.queries = { ...this.queries, ...newQueries };
    if (isNext) {
      this.queries.offset = this.queries.offset + this.initQueries.limit;
    }

    const cache = this.getCache(Qs.stringify(this.queries));
    if (cache) {
      this.template = cache;
      this.render();
      return;
    }

    fetchList(baseUrl, Character, this.queries).then((list) => {
      this.template = list.map((item) => item.template).join('');
      this.render();
      this.save();
    });
  }

  save() {
    localStorage.setItem(Qs.stringify(this.queries), this.template);
  }

  getCache(key) {
    return localStorage.getItem(key);
  }
}

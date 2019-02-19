const baseUrl = '//api.giphy.com';
const apiKey = 'JYcsJjA4m41dJeGuIEb5YILBLoy7XEub';
const urls = {
  trending: '/v1/gifs/trending',
  search: '/v1/gifs/search',
};
const searchUrl = baseUrl + urls.search;

const getGifsByQuery = (q, offset = '') => {
  const queries = `?api_key=${apiKey}&q=${q}&offset=${offset}`;
  return fetch(searchUrl + queries)
    .then((response) => response.json())
    .then((result) => {
      return result.data.map((item) => {
        return item.images.downsized.url;
      });
    })
    .then((results) => {
      return results.map(itemTemplate).join('');
    })
    .then((html) => {
      root.insertAdjacentHTML('beforeEnd', html);
    });
};

const itemTemplate = (src) => {
  return `
    <div class="item">
      <img src="${src}">
    </div>`;
};

const root = document.querySelector('#root');
const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  root.innerHTML = '';
  getGifsByQuery(input.value);
});
let offset = 0;
button.addEventListener('click', (e) => {
  offset += 25;
  getGifsByQuery(input.value, offset);
});

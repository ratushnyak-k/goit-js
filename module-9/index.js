const url = 'https://picsum.photos/1500/1200/?image=';

const urls = [];
for (let i = 0; i < 10; i++) {
  urls.push(Math.floor(Math.random() * 1000));
}

const promises = urls.map((randomNumber) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url + randomNumber;
    img.onload = () => {
      resolve();
    };

    img.onerror = () => {
      reject(img);
    };
  });
});

Promise.all(promises).finally(() => {
  urls.forEach((src) => {
    console.log(1);
    const img = new Image();
    img.src = url + src;
    document.body.appendChild(img);
  });
});

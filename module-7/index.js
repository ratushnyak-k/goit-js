const root = document.createElement('div');

root.setAttribute('id', 'app');

root.innerHTML = `
    <div class="container">
      <div id="sidebar">
        <form>
          <input name="city" type="text" value=""/>
          <button type="submit">Search</button>
        </form>
        <a></a>
      </div>
      <div id="map">
      </div>
    </div>
`;

document.body.appendChild(root);
const generateMapUrl = (searchValue) => `https://www.google.com/maps/place/${searchValue}`;

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const { value } = this.querySelector('input');
  const a = document.querySelector('a');

  a.innerText = value;
  a.setAttribute('target', '_blank');
  a.setAttribute('href', generateMapUrl(value));
});

function initMap(lat, lng) {
  const center = { lat, lng };
  new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 8,
  });

  new google.maps.Marker({
    position: center,
    map,
  });
}

function findGeolocation() {
  navigator.geolocation.getCurrentPosition(
    (response) => {
      const { latitude: lat, longitude: lng } = response.coords;
      initMap(lat, lng);
    },
    (err) => {
      console.log(err);
    }
  );
}

let userName;
let color;

function loginAs() {
  userName = prompt('Enter your name.');
  color = getRandomColor();

  if (userName) {
    document.getElementById('user-name').innerText = userName;
    document.getElementById('message').removeAttribute('disabled');
  } else {
    alert('Permission denied');
  }
}

function generateTemplate(message) {
  const div = document.createElement('div');
  div.setAttribute('class', 'message-container');
  div.innerHTML = `<div class="message" style="border-color: ${color};">
                        <div>${message}</div>
                        <div class="message-user-name">${userName}</div>
                        <div class="date">${new Date().toLocaleString()}</div>
                     </div>`;
  return div;
}

function writeMessage() {
  const message = prompt('Write a message here!');
  if (message) {
    document.getElementById('chat-container').prepend(generateTemplate(message));
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

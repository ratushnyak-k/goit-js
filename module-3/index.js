function loginAs() {
  const userName = prompt('Enter your name.');
  if (userName) {
    document.getElementById('user-name').innerText = userName;
    document.getElementById('message').removeAttribute('disabled');
  } else {
    alert('Permission denied');
  }
}

function writeMessage() {
  const message = prompt('Write a message here!');
  if (message) {
    const div = document.createElement('div');
    div.setAttribute('class', 'message-container');
    div.innerHTML = `<div class="message">${message}</div>`;
    document.getElementById('chat-container').prepend(div);
  }
}

class User {
  constructor({ id, name, address, email, picture, isFriend }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.avatar = picture.large;
    this.isFriend = isFriend;
  }

  getFullName() {
    const { first, last } = this.name;
    return `${first} ${last}`;
  }

  getFullAddress() {
    const { city, street } = this.address;
    return `${city}, ${street}`;
  }

  createDOMElement() {
    const div = document.createElement('div');
    div.setAttribute('class', 'user');
    div.setAttribute('id', this.id);
    div.innerHTML = this.getTemplate();
    return div;
  }

  getTemplate() {
    return `
      <div class="space-between">
        <div>
          <button>${this.isFriend ? 'Remove' : 'Add'}</button>
        </div>
        <div>
          <img src="${this.avatar}" alt="${this.getFullName()}">
        </div>
      </div>
      <strong class="right">${this.getFullName()}</strong>
      <dl class="space-between">
        <dt>Email: </dt>
        <dd>${this.email}</dd>
      </dl>
      <dl class="space-between">
        <dt>Address: </dt>
        <dd>${this.getFullAddress()}</dd>
      </dl>
`;
  }

  setAsFriend() {
    this.isFriend = true;
  }

  setAsNotFriend() {
    this.isFriend = false;
  }
}

class UserList {
  constructor(data) {
    this.fullUserList = data.map((item) => {
      return new User(item);
    });

    this.friendList = this.fullUserList.filter((item) => item.isFriend);

    this.notFriendList = this.fullUserList.filter((item) => !item.isFriend);
  }

  clearList() {
    const userListDOMNode = document.querySelector('.user-list');
    if (userListDOMNode) {
      userListDOMNode.remove();
    }
  }

  renderList(list) {
    this.clearList();

    const div = document.createElement('div');
    div.setAttribute('class', 'user-list');

    list.forEach((user) => {
      div.appendChild(user.createDOMElement());
    });

    document.body.appendChild(div);
  }

  addFriend(id) {
    const user = this.fullUserList.find((item) => {
      return item.id === id;
    });
    user.setAsFriend();
    this.renderList(this.fullUserList);
  }

  removeFriend(id) {
    const user = this.fullUserList.find((item) => {
      return item.id === id;
    });
    user.setAsNotFriend();
    this.renderList(this.fullUserList);
  }
}

const list = new UserList(dataBase);

function showAllUsers() {
  list.renderList(list.fullUserList);
}

function showFriends() {
  list.renderList(list.friendList);
}

function showNotFriends() {
  list.renderList(list.notFriendList);
}

function User({ id, name, address, email, picture, isFriend }) {
  this.id = id;
  this.name = name;
  this.address = address;
  this.email = email;
  this.avatar = picture.large;
  this.isFriend = isFriend;

  this.getFullName = function() {
    const { first, last } = this.name;
    return `${first} ${last}`;
  };

  this.getFullAddress = function() {
    const { city, street } = this.address;
    return `${city}, ${street}`;
  };

  this.createDOMElement = function() {
    const div = document.createElement('root');
    div.setAttribute('class', 'user');
    div.setAttribute('id', this.id);
    div.innerHTML = this.getTemplate();
    return div;
  };

  this.getTemplate = function() {
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
  };

  this.setAsFriend = function() {
    this.isFriend = true;
  };

  this.setAsNotFriend = function() {
    this.isFriend = false;
  };
}

function UserList(data) {
  this.fullUserList = data.map((item) => {
    return new User(item);
  });

  this.friendList = this.fullUserList.filter((item) => item.isFriend);

  this.notFriendList = this.fullUserList.filter((item) => !item.isFriend);

  this.clearList = function() {
    const userListDOMNode = document.querySelector('.user-list');
    if (userListDOMNode) {
      userListDOMNode.remove();
    }
  };

  this.renderList = function(list) {
    this.clearList();

    const div = document.createElement('root');
    div.setAttribute('class', 'user-list');

    list.forEach((user) => {
      div.appendChild(user.createDOMElement());
    });

    document.body.appendChild(div);
  };

  this.addFriend = function(id) {
    const user = this.fullUserList.find((item) => {
      return item.id === id;
    });
    user.setAsFriend();
    this.renderList(this.fullUserList);
  };

  this.removeFriend = function(id) {
    const user = this.fullUserList.find((item) => {
      return item.id === id;
    });
    user.setAsNotFriend();
    this.renderList(this.fullUserList);
  };
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

'use strict';
function User({ name, id, email, address, isFriend }) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.address = address;
  this.isFriend = isFriend;

  this.createDOMElement = function() {
    const div = document.createElement('div');
    div.setAttribute('class', 'friend');
    div.setAttribute('id', this.id);
    div.innerHTML = this.getTemplate();
    return div;
  };

  this.reRenderElement = function() {
    document.getElementById(this.id).innerHTML = this.getTemplate();
  };

  this.getTemplate = function() {
    return `
      <div>${this.name}</div>
      <div>${this.email}</div>
      <div>${this.address.street}</div>
      <div>
        <button>${this.isFriend ? 'Remove' : 'Add'}</button>
      </div>
    `;
  };

  this.setAsFriend = function() {
    this.isFriend = true;
  };

  this.setAsNotFriend = function() {
    this.isFriend = false;
  };
}

function UserList(list) {
  this.fullUserList = list.map((item) => new User(item));

  this.renderList = function(list) {
    const div = document.createElement('div');
    div.setAttribute('class', 'user-list');
    list.forEach((user) => {
      div.appendChild(user.createDOMElement());
    });
    document.body.appendChild(div);
  };

  this.clearList = function() {
    const userListDOMNode = document.querySelector('.user-list');
    if (userListDOMNode) {
      userListDOMNode.remove();
    }
  };

  this.showFullUserList = function() {
    this.clearList();
    this.renderList(this.fullUserList);
  };

  this.showFriendsList = function() {
    this.clearList();
    this.renderList(this.fullUserList.filter((user) => user.isFriend));
  };

  this.showNotFriendsList = function() {
    this.clearList();
    this.renderList(this.fullUserList.filter((user) => !user.isFriend));
  };

  this.addFriend = function(id) {
    const user = this.fullUserList.find((user) => user.id === id);
    user.setAsFriend();
    user.reRenderElement();
  };

  this.removeFriend = function(id) {
    const user = this.fullUserList.find((user) => user.id === id);
    user.setAsNotFriend();
    user.reRenderElement();
  };
}

const userList = new UserList(dataBase);

userList.showFullUserList();

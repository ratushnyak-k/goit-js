'use strict';
function User({ name, id, email, address, isFriend, picture }) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.address = address;
  this.isFriend = isFriend;
  this.avatar = picture.large;

  this.getFullName = function() {
    return `${this.name.first} ${this.name.last}`;
  };

  this.getFullAddress = function() {
    return `${this.address.city}, ${this.address.street}`;
  };

  this.createDOMElement = function() {
    const div = document.createElement('div');
    div.setAttribute('class', 'user');
    div.setAttribute('id', this.id);
    div.innerHTML = this.getTemplate();
    return div;
  };

  this.reRenderElement = function() {
    document.getElementById(this.id).innerHTML = this.getTemplate();
  };

  this.getTemplate = function() {
    return `
      <div class="space-between">
        <div class="button-wrap">
          <button>${this.isFriend ? 'Remove' : 'Add'}</button>
        </div>
        <div class="img-wrap"> 
          <img src="${this.avatar}" alt="${this.getFullName()}">
        </div>      
      </div>
      <strong class="right">${this.getFullName()}</strong>
      <dl class="flex-end"><dt>Email: </dt><dd>${this.email}</dd></dl>
      <dl class="flex-end"><dt>Address: </dt><dd>${this.getFullAddress()}</dd></dl>
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

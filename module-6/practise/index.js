class User {
  constructor(data) {
    this.updateData(data);
  }

  updateData(data) {
    this.name = data.name;
    this.email = data.email;
    this.id = data.id;
    this.dob = data.dob;
  }

}

class Moderator extends User {
  constructor(data) {
    super(data);
    this.role = 'moderator';
  }

  createUser(list, UserRole, userData) {
    list.add(new UserRole(userData));
  }

  updateUser(list, userId, newUserData) {
    const user = list.find((item) => item.id === userId);
    if (user) {
      user.updateData(newUserData);
    } else {
      console.error('User not found');
    }
  }
}

class Admin extends Moderator {
  constructor(data) {
    super(data);
    this.role = 'admin';
  }

  removeUser(list, userId) {
    list.remove(userId);
  }

  changeRole(list, userId, UserRole) {
    list.forEach((user, i) => {
      if (user.id === userId) {
        list[i] = new UserRole(user);
      }
    });
  }
}

class Guest extends User {
  constructor(data) {
    super(data);
    this.role = 'guest';
  }
}

let admin = new Admin(dataBase[0]);

class UserList {
  constructor(data = []) {
    this.list = data;
  }

  add(user) {
    this.list.push(user);
  }

  remove(userId) {
    this.list.forEach((user, i) => {
      if (user.id === userId) {
        this.list.splice(i, 1);
      }
    });
  }
}

const userList = new UserList([admin]);

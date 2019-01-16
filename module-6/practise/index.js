// check instances
// Product, ProductList
// extend users to manage products
// ShoppingCart

// create rootNode for list
// create node for each user, product
// create template for each user, product
// render lists
// show lists one by one
// appendChild vs insertAdjustmentHTML, fragment
// make refactoring

class User {
  constructor(data) {
    this.updateData(data);
    this.node = document.createElement('li');
    this.node.setAttribute('class', 'user-item');
  }

  renderUser() {
    this.node.innerHTML = this.template;
  }

  get fullName() {
    const { title, first, last } = this.name;
    return `${title} ${first} ${last}`;
  }

  get template() {
    return `
    <div>
      ${this.fullName}<br>
      ${this.email}<br>
      ${this.dob.age}<br>
    </div>`;
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
    if (list instanceof UserList) {
      list.add(new UserRole(userData));
    } else {
      console.error(list, 'was not create with UserList');
    }
  }

  updateUser(list, userId, newUserData) {
    if (list instanceof UserList) {
      const user = list.find((item) => item.id === userId);
      if (user) {
        user.updateData(newUserData);
      } else {
        console.error('User not found');
      }
    } else {
      console.error(list, 'was not create with UserList');
    }
  }

  createProduct(list, productData) {
    if (list instanceof ProductsList) {
      list.add(new Product(productData));
    } else {
      console.error(list, 'was not create with ProductList');
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

  removeProduct(list, productId) {
    list.remove(productId);
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

let admin = new Admin(users[0]);

class List {
  constructor(data = []) {
    this.list = data;
  }

  add(item) {
    this.list.push(item);
  }

  remove(id) {
    this.list.forEach((item, i) => {
      if (item.id === id) {
        this.list.splice(i, 1);
      }
    });
  }
}

class UserList extends List {
  constructor(data) {
    super(data);
    this.rootNode = document.querySelector('#users');
  }

  attachRootNodeTo(node) {
    this.rootNode.appendChild(node);
  }
}
class ProductsList extends List {
  constructor(data) {
    super(data);
    this.rootNode = document.querySelector('#products');
    this.listNode = document.createElement('ul');
  }
}
const userList = new UserList([admin]);

admin.createUser(userList, Moderator, users[2]);
const productsList = new ProductsList();

class Product {
  constructor(data) {
    this.id = data.ProductId;
    this.category = data.Category;
    this.description = data.Description;
    this.name = data.Name;
    this.status = data.Status;
    this.quantity = data.Quantity;
  }
}

const ul = document.createElement('ul');

function Machine(power) {
  this.enable = false;
  this.color = 'white';
  this._power = 1000;
}

Machine.prototype.turnOn = function() {
  this.enable = true;
};

Machine.prototype.turnOff = function() {
  this.enable = false;
};

function CoffeeMachine(...args) {
  Machine.apply(this, args);
  this.waterTank = 0;
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

function Fridge(power) {
  Machine.call(this, power);
  this.capacity = '100%';
}

Fridge.prototype = Object.create(Fridge.prototype);
Fridge.prototype.constructor = Fridge;

const fridge = new Fridge(1000);

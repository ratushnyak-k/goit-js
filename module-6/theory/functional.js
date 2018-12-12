function Machine() {
  const power = 1000;

  this.enable = false;
  this.color = 'white';

  this.turnOn = function() {
    this.enable = true;
  };
  this.turnOff = function() {
    this.enable = false;
  };
}

function CoffeeMachine() {
  Machine.apply(this);
  this.waterTank = 0;
}

function Fridge() {
  Machine.call(this);
  this.capacity = '100%';
}

const m = new Machine();
const coffee = new CoffeeMachine();
const fridge = new Fridge();

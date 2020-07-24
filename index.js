const foods = ["Rice", "Pizza", "Corn", "Cowpea", "Wheat", "Yam", "Pudding"];

const getRandomFood = () => Math.trunc(Math.random() * foods.length );

class LogItem {
  constructor(food, day) {
    this.food = food;
    this.day = day;
  }
}

const Lycanthrope = function(name) {
  this.name = name;
  this.log = [];

  this.eat = function(food, day) {
    this.log.push(new LogItem(food, day));
  };

  this.showLogs = function() {
    // console.log(this.log);
    for (log of this.log) {
      
      if (log.food === "Pizza") {
        console.log(log, " // Transformed");
      } else {
        console.log(log);
      }
    }
  };
};

const Jacques = function(name) {
  Lycanthrope.call(this, name);
};

const jacques = new Jacques("Jack");

function start(jack) {
  const totalTime = 24; // 2 weeks

  for (let i = 0; i < totalTime; i++) {
    jack.eat(foods[getRandomFood()], i + 1);
  }
}

start(jacques);
jacques.showLogs();
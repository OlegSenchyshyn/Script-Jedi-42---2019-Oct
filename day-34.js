// Day 34 - OOP

// Adam and Eve - 
// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/

class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}

//_________________________________________________________________________
// Labrador - 
// https://www.codewars.com/kata/56ff9b53140fcca90b000530/

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
    this.legs = 4;
  }
}

//_________________________________________________________________________
// Classy Classes - 
// https://www.codewars.com/kata/55a144eff5124e546400005a

class Person {
  constructor(name, age) {    
    this.info = name + 's age is ' + age;
  }
}


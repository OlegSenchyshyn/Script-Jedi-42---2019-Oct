// Day 35 - OOP

// Object Prototypes 
// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes

const prototype = {
  description: 'TODO: GIVE ME A DESCRIPTION'
};
widget.__proto__ = prototype;
gadget.__proto__ = prototype;
thingamabob.__proto__ = prototype;


//_____________________________________________________________________________
// Class-Like Objects 
// https://www.codewars.com/kata/javascript-class-like-objects

const Animal = function(name, type) {
  this.name = name;
  this.type = type;
  this.toString = function() {
    return this.name + ' is a ' + this.type;
  };
};

// Day 30 - Duck Typing and Inheritance
// SantaClausable Interface 
// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  if (typeof obj.sayHoHoHo !== 'function') return false;
  if (typeof obj.distributeGifts !== 'function') return false;
  if (typeof obj.goDownTheChimney !== 'function') return false;
  else return true;
}

//___________________________________________________________________
// Cylon Evolution 
// http://www.codewars.com/kata/cylon-evolution

function Cylon(model) {
  this.model = model;
  this.attack = () => 'Destroy all humans!';
}
function HumanSkin(model) {
  this.model = model;
  this.attack = () => 'Destroy all humans!';
  this.infiltrate = () => 'Infiltrate the colonies';
}
HumanSkin.prototype = new Cylon();

// Day 32 - Fields and Properties
//_______________________________

// "this"" is a problem - 
// http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last;
}

//_______________________________
// ""this"" is an other problem - 
// https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, 'fullName', {
    set: function(value) {
      const arr = value.split(' ');
      if (arr.length === 2) {
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    },
    get: function() { return this.firstName + ' ' + this.lastName }
  });
}

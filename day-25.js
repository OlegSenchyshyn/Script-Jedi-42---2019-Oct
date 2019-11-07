// Day 25 - Calling functions

// Call function using apply
// http://www.codewars.com/kata/write-javascripts-call-function-using-apply


Function.prototype.call = function(val, ...args) {
  return this.apply(val, args);
};

//__________________________________________________________________________
// Anonymous returns 
// http://www.codewars.com/kata/anonymous-returns

const name = 'The Window';

const alpha = {
  name: 'My Alpha',
  getNameFunc: function() {
    return function() {
      return alpha.name;
    };
  }
};

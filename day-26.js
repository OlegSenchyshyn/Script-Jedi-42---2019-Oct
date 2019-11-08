// Day 26 - Bind
// Power of bind 
// http://www.codewars.com/kata/power-bind


Function.prototype.bind = function(ctx) {
  const fn = this;
  const func = function() {
    return fn.apply(ctx);
  };
  func.bind = function(ctx) {
    return fn.bind(ctx);
  };
  return func;
};

//____________________________________________________________________
// Sort with Arrow Functions 
// https://www.codewars.com/kata/sort-with-arrow-functions

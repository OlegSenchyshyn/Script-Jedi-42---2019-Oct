// Day 29 - Understanding new
// How new works 
// https://www.codewars.com/kata/how-new-works

const myObj = Object.create(MyObject.prototype);
              myObj.constructor();
              
//_________________________________________________________              
// Replicate new
// http://www.codewars.com/kata/replicate-new

function nouveau(Constructor, ...args) {
  const thisValue = Object.create(Constructor.prototype);
  const result = Constructor.apply(thisValue, args);
  return (typeof result === 'object' || typeof result === 'function') && result !== null ? result : thisValue;
}

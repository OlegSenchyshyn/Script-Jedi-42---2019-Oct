// Duplicate Arguments
// https://www.codewars.com/kata/duplicate-arguments/train/javascript

const solution = (...arr) => [...new Set(arr)].length !== arr.length; 

//__________________________________________________________________________________
//Last Argument
// http://www.codewars.com/kata/last

function last(list) {
  const lastArg = arguments[arguments.length - 1];
  return lastArg[lastArg.length - 1] || lastArg;
}


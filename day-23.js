// Unpacking arguments
// http://www.codewars.com/kata/unpacking-arguments

const spread = (func, args) => func(...args);


//______________________________________________________
// For the sake of argument 
// http://www.codewars.com/kata/for-the-sake-of-argument

const numbers = (...param) => param.every(nums => typeof nums === 'number');

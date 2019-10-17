// https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}


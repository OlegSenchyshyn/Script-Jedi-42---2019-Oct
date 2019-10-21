//https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript

function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) return 'Input number is Number.MAX_VALUE';
  if (n === Number.MIN_VALUE) return 'Input number is Number.MIN_VALUE';
  if (isNaN(n)) return 'Input number is Number.NaN';
  if (n === Number.NEGATIVE_INFINITY) return 'Input number is Number.NEGATIVE_INFINITY';
  if (n === Number.POSITIVE_INFINITY) return 'Input number is Number.POSITIVE_INFINITY';
  return 'Input number is ' + n;
}



//https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring/train/javascript

function colorOf(r, g, b) {
  r.toString(16).length < 2 ? (r = '0' + r.toString(16)) : (r = r.toString(16));
  g.toString(16).length < 2 ? (g = '0' + g.toString(16)) : (g = g.toString(16));
  b.toString(16).length < 2 ? (b = '0' + b.toString(16)) : (b = b.toString(16));
  return '#' + r + g + b;
}



//https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision/train/javascript

function howManySmaller(arr, n) {
  let smallerNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (n > arr[i].toFixed(2)) {
      smallerNum++;
    }
  }
  return smallerNum;
}

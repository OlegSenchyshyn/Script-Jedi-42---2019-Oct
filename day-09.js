//https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr/train/javascript

function cutIt(arr) {
  const short = shortestStr(arr);
  const cut = [];
  for (let i = 0; i < arr.length; i++) {
    cut.push(arr[i].substr(0, short));
  }
  return cut;
}
function shortestStr(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min.length;
}


//https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/train/javascript

function firstToLast(str, c) {  
  return (str.includes(c)) ? str.lastIndexOf(c) - str.indexOf(c) : -1; 
}

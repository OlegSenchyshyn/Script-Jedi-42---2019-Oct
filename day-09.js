//https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr/train/javascript

function cutIt(arr) {
  const short = shortestStr(arr);
  for (let i in arr) arr[i] = arr[i].substr(0, short);
  return arr;
}
function shortestStr(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++)
    if (arr[i].length < min.length) min = arr[i];
  return min.length;
}


//https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search/train/javascript

function firstToLast(str, c) {  
  return (str.includes(c)) ? str.lastIndexOf(c) - str.indexOf(c) : -1; 
}


//https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join/train/javascript

function splitAndMerge(str, sp) {
  const words = str.split(' ');
  for (const letters in words) {
    words[letters] = words[letters].split('').join(sp);
  }
  return words.join(' ');
}

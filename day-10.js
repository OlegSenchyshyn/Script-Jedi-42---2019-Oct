//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str){
  const strUp = str.toUpperCase().split(' ');
  for (const i in strUp) {
    const sliceLastLetter = strUp[i].slice(0, -1);
    const addLowerLastLetter = strUp[i].slice(-1).toLowerCase();  
    strUp[i] = sliceLastLetter + addLowerLastLetter;
  }
  return strUp.join(' ');
}  


//https://www.codewars.com/kata/training-js-number-20-methods-of-string-object-charat-charcodeat-and-fromcharcode/train/javascript

//Це на жаль не мій розв'язок, але максимально зрозумілий для мене
function topSecret(str) {
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++)
    if (chars[i] === ' ' || chars[i] === '!') {
    } else if (chars[i] == 'A') {
      chars[i] = 'X';
    } else if (chars[i] == 'B') {
      chars[i] = 'Y';
    } else if (chars[i] == 'C') {
      chars[i] = 'Z';
    } else if (chars[i] == 'a') {
      chars[i] = 'x';
    } else if (chars[i] == 'b') {
      chars[i] = 'y';
    } else if (chars[i] == 'c') {
      chars[i] = 'z';
    } else {
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }
  return chars.join('');
}
//question1: The top secret file number is...
answer1 = '2181';
//question2: Super agent's name is...
answer2 = 'aFWB';
//question3: He stole the treasure is...
answer3 = 'Barbie doll';


//https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/train/javascript

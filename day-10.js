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

//Це на жаль не мій розв'язок, але код я змінив його під себе
function topSecret(str) {
  const chars = str.split('');
  for (let i = 0; i < chars.length; i++)
    if (chars[i] == ' ' || chars[i] == '!') {}
    else if (chars[i] == 'A') chars[i] = 'X';
    else if (chars[i] == 'B') chars[i] = 'Y';
    else if (chars[i] == 'C') chars[i] = 'Z';
    else if (chars[i] == 'a') chars[i] = 'x';
    else if (chars[i] == 'b') chars[i] = 'y';
    else if (chars[i] == 'c') chars[i] = 'z';
    else chars[i] = String.fromCharCode(chars[i].charCodeAt() -3);
  return chars.join('');
}
//question1: The top secret file number is...
answer1="3745";
//question2: Super agent's name is...
answer2="RILc";
//question3: He stole the treasure is...
answer3="Expired biscuits";


//https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template/train/javascript
function fiveLine(s) {
  const i = s.trim();
  return `${i}\n${i.repeat(2)}\n${i.repeat(3)}\n${i.repeat(4)}\n${i.repeat(5)}`;
}

// https://www.codewars.com/kata/training-js-number-9-loop-statement-while-and-do-dot-while/train/javascript
function padIt(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = str + '*';
    } else {
      str = '*' + str;
    }
    n--;
  }
  return str;
}


// https://www.codewars.com/kata/training-js-number-10-loop-statement-for/train/javascript
function pickIt(arr) {
  const odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
  return [odd, even];
}


// https://www.codewars.com/kata/training-js-number-11-loop-statement-break-continue/train/javascript
function grabDoll(dolls) {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    
    if (bag.length >= 3) {
      break;
    }
  }
  return bag;
}


// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    let val = obj[key];
    if (key.length === 5) {
      arr.push(key);
    }
    if (val.length === 5) {
    arr.push(val);
    }
  }
  return arr;
}




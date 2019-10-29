//https://www.codewars.com/kata/training-js-number-22-unlock-new-skills-arrow-function-spread-operator-and-deconstruction/train/javascript

const shuffleIt = (arr, ...shuffle) => {
for (i of shuffle) {
    let x = arr[i[0]];
    arr[i[0]] = arr[i[1]];
    arr[i[1]] = x;
  }
  return arr;
}

//______________________________________________________________________________________________________________________________
//http://www.codewars.com/kata/572af273a3af3836660014a1

const infiniteLoop = (arr, d, n) => {
  for (let i = 0; i < n; i++) {
    if (d === 'left') {
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
      arr[2].push(arr[0].shift());    
    } else {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
};

//______________________________________________________________________________________________________________________________
//http://www.codewars.com/kata/572cb264362806af46000793

const threeInOne = arr => {
  const result = [];
  for (i = 0; i < arr.length; i = i + 3) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return result;
};

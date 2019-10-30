//http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const arr1 = arr.slice();
  const counter = {};
  for (let i = 0; i < arr1.length; i++) {
    if (counter[arr1[i]]) {
      counter[arr1[i]]++;
    } else {
      counter[arr1[i]] = 1;
    }
  }
  arr1.sort((a, b) => {
    if (counter[a] < counter[b]) return -1;
    if (counter[a] == counter[b]) return b - a;
    return 1;
  });
  return arr1;
}

//____________________________________________________________________________
//http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  return arr.map(function(item) {
    const part1 = item.slice(0, item.length / 2);
    const part2 = item.slice(item.length / 2);
    if (part1.length === part2.length) return part1 + '|' + part2;
    else return part1 + '|' + part2.slice(1);
  });
}


//____________________________________________________________________________
//http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const s = scores.filter(x => x === 100).length;
  const a = scores.filter(x => x < 100 && x >= 90).length;
  const b = scores.filter(x => x < 90 && x >= 80).length;
  const c = scores.filter(x => x < 80 && x >= 60).length;
  const d = scores.filter(x => x < 60 && x >= 0).length;
  const x = scores.filter(x => x < 0).length;
  return { S: s, A: a, B: b, C: c, D: d, X: x };
}



//____________________________________________________________________________
//http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let a = arr[i].toString().split('').reverse().join(''),
      b = arr[i + 1].toString();
    if (a === b) return [arr[i], arr[i + 1]];
  }
  return [-1, -1];
}

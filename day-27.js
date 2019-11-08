// Day 27 - Closures

// Understanding closures - the basics 
// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) res.push(() => i);
  return res;
}

//_______________________________________________________________________________
// Shifty closures 
// https://www.codewars.com/kata/shifty-closures/train/javascript

const name = 'Abe';
      greet_abe = () => 'Hello, ' + name + '!';
      name2 = 'Ben';
      greet_ben = () => 'Hello, ' + name2 + '!';

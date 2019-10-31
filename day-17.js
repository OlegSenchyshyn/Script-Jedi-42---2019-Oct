//#29: methods of arrayObject---concat() and join() 
//http://www.codewars.com/kata/5731861d05d14d6f50000626

const bigToSmall = arr => [].concat(...arr).sort((a, b) => b - a).join('>');

//______________________________________________________________________________________________________
//#30: methods of arrayObject---reduce() and reduceRight() 
//http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const result = [];
  const arrStr = arr.map(a => a + '');
  for (let i = 0; i < arrStr.length - 1; i++) {
    result.push(Number(arrStr[i].slice(-1)) + Number(arrStr[i + 1][0]));
  }
  return result.reduce((a, b) => a * b);
}


//______________________________________________________________________________________________________
//#31: methods of arrayObject---isArray() indexOf() and toString() 
//http://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return "It's a fake array";
  if (!arr.includes(5) || !arr.includes(13)) return "It's a white array";
  else return "It's a black array";
}

//______________________________________________________________________________________________________
//Implement own reduce 
//https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function(process, initial) {
  for (let i = 0; i < this.length; i++) {
    if (!initial) {
      initial = this[0];
      i++;
    }
    initial = process(initial, this[i]);
  }
  return initial;
};

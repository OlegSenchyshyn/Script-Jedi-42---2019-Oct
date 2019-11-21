// Day 39 - Create Iterator

//Create iterator 
// https://www.codewars.com/kata/5c743cec901022438549964a

const createIterator = (array) => {
  let index = 0;
  return {
    next() { 
      const value = array[index++];
      const done = index > array.length;
      return {value, done};
    },
    get index() {
      return Math.min(index, array.length)
    }
  }
};

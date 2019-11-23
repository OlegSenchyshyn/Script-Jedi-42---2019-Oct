// Day 41 - Generators

// Generators #1 
// https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator() {
  let counter = 1;
  while (true) {
    let value = yield counter++;
    counter = value || counter;
  }
}

//_________________________________________________________________________
// Generators #2 
// https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  for (let b = 1; true; b++) {
    yield `${a} x ${b} = ${a * b}`;
  }
}

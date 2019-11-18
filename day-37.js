// Day 37 - TDD Bin Iterator

// array
// http://tddbin.com/#?kata=es6/language/iterator/array

// 37: iterator/iterable - array. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The native array is a built-in iterable object', function() {
  const arr = ['a', 'B', 'see'];
  describe('the iterator', function() {
    it('an array has an iterator, which is a function', function() {
      const iterator = arr[Symbol.iterator];
      const theType = typeof iterator;
      const expected = 'function';
      assert.equal(theType, expected);
    });
    it('can be looped with `for-of`, which expects an iterable', function() {
      let count = 0;
      for (let value of arr) {
        count++;
      }
      assert.equal(count, arr.length);
    });
  });
  describe('the iterator protocol', function() {
    it('calling `next()` on an iterator returns an object according to the iterator protocol', function() {
      const iterator = arr[Symbol.iterator]();
      const firstItem = iterator.next();
      assert.deepEqual(firstItem, {done: false, value: 'a'});
    });
    it('the after-last element has done=true', function() {
      const arr = [];
      const iterator = arr[Symbol.iterator]();
      const afterLast = iterator.next();
      assert.deepEqual(afterLast, {done: true, value: void 0});
    });
  });
});


//_________________________________________________________________________
// string 
// http://tddbin.com/#?kata=es6/language/iterator/string

// 38: iterator/iterable - string. 
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite).
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The native string is a built-in iterable object', function() {
  
  const s = 'abc';
  
  describe('string is iterable', function() {
    it('the string`s object key `Symbol.iterator` is a function', function() {
      const isA = typeof s[Symbol.iterator];
      assert.equal(isA, 'function');
    });
    it('use `Array.from()` to make an array out of any iterable', function(){
      const arr = Array.from(s);
      assert.deepEqual(arr, ['a', 'b', 'c']);
    });
  });
  
  describe('a string`s iterator', function() {
    let iterator;
    beforeEach(function() {
      iterator = s[Symbol.iterator]();
    });
    it('has a special string representation', function(){
      const description = iterator.toString();
      assert.equal(description, '[object String Iterator]');
    });
    it('`iterator.next()` returns an object according to the iterator protocol', function(){
      const value = iterator.next();
      assert.deepEqual(value, {done: false, value: 'a'});
    });
    it('the after-last call to `iterator.next()` says done=true, no more elements', function(){
      iterator.next();
      iterator.next();
      iterator.next();
      assert.equal(iterator.next().done, true);
    });
  });
});



//_________________________________________________________________________
// protocol 
// http://tddbin.com/#?kata=es6/language/iterator/protocol



//_________________________________________________________________________
// usage 
// http://tddbin.com/#?kata=es6/language/iterator/usages

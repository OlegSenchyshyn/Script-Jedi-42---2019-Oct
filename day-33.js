// Day 33 - TDD Bin
//____________________________________________________

// TDD Bin Object.is()
// Object.is() 
// http://tddbin.com/#?kata=es6/language/object-api/is

// ES6 - 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Object.is()` determines whether two values are the same', function(){
  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, 1);
      assert.equal(areSame, true);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.is(1, '1');
      assert.equal(areSame, false);
    });
    it('strings just have to match', function() {
      const areSame = Object.is('one', 'one');
      assert.equal(areSame, true);
    });
    it('+0 is not the same as -0', function() {
      const areSame = Object.is(-0, +0);
      assert.equal(Object.is(+0, -0), areSame);
    });
    it('NaN is the same as NaN', function() {
      const number = NaN;
      assert.equal(Object.is(NaN, number), true);
    });
  });
  describe('coercion (as in `==`) and strict compare (as in `===`) do NOT apply', function() {
    it('+0 and -0 are not the same for `Object.is()`', function() {
      const strictlyCompared = +0 !== -0;
      const objectIsCompared = Object.is(+0, -0);
      assert.equal(objectIsCompared, strictlyCompared);
    });
    it('empty string and `false` are not the same', function() {
      const emptyString = 'str';
      const isSame = Object.is(emptyString, false);
      assert.equal(isSame, emptyString == false);
    });
    it('NaN', function() {
      const coerced = NaN !== NaN;
      const isSame = Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN and 0/0', function() {
      const isSame = Object.is(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = `{}` !== `{}`;
      assert.equal(Object.is({}, {}), areSame);
    });
    it('two `Map`s with the same content are not the same thing', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map2);
      assert.equal(areSame, false);
    });
  });
});

//_____________________________________________________________________________________________
// TDD Bin Reflect 
// http://tddbin.com/#?kata=es6/language/reflect/basics

// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const expectedType = typeof Reflect;
      assert.equal(typeof Reflect, expectedType);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => new Reflect();
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = typeof Reflect.call;
      assert.equal(typeof Reflect.call, expected);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      let Class = function() {};
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: true};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});

//_____________________________________________________________________________________________
// Basics
// Reflect.apply()
// http://tddbin.com/#?kata=es6/language/reflect/apply

// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {
  it('it is a static method', function() {
    const expectedType = 'function';
    assert.equal(typeof Reflect.apply, expectedType);
  });

  describe('the 1st parameter', () => {
    it('is a callable, e.g. a function', () => {
      let fn = () => 42;
      assert.equal(Reflect.apply(fn, void 0, []), 42);
    });
    it('passing it a non-callable throws a TypeError', function() {
      const applyOnUncallable = () => new Reflect();
      assert.throws(applyOnUncallable, TypeError);
    });
  });

  describe('the 2nd parameter', () => {
    it('is the scope (or the `this`)', function() {
      class FourtyTwo {
        constructor() { this.value = 42}
        fn() {return this.value}
      }
      let instance = new FourtyTwo();
      const fourtyTwo = Reflect.apply(instance.fn, instance, []);
      assert.deepEqual(fourtyTwo, 42);
    });
  });

  describe('the 3rd parameter', () => {
    it('must be an array (or array-like)', () => {
      const thirdParam = Array;
      assert.doesNotThrow(() => Reflect.apply(() => void 0, null, thirdParam));
    });
    it('is an array of parameters passed to the call', function() {
      let emptyArrayWithFiveElements = Reflect.apply(Array,[], new Array(5));
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  });

  describe('example usages', () => {
    it('simple function call', () => {
      const fn = () => 'the return value';
      assert.equal(Reflect.apply(fn, void 0, []), 'the return value');
    });
    it('call a function on an array', () => {
      const fn = () => [23, 42];
      assert.deepEqual(Reflect.apply(fn, [0, 23, 42], [1]), [23, 42]);
    });
    it('pass in the `this` that the function to call needs', () => {
      class Bob {
        constructor() {let name = 'Bob'; }
        name() { return this.name; }
      }
      const bob = new Bob();
      const scope = Bob;
      assert.equal(Reflect.apply(bob.name, scope, []), 'Bob');
    });
  });
});

//_______________________________________________________________________________________
// Reflect.getPrototypeOf() 
// http://tddbin.com/#?kata=es6/language/reflect/getprototypeof

// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {
  it('works like `Object.getPrototypeOf`', function() {
    const viaObject = Object.getPrototypeOf({});
    const viaReflect = Reflect.getPrototypeOf({});
    assert.strictEqual(viaObject, viaReflect);
  });
  it('throws a TypeError for a non-object', function() {
    let fn = () => { Reflect.getPrototypeOf() };
    assert.throws(fn, TypeError);
  });
  it('a `new Set()` has a prototype', function() {
    const aSet = new Set();
    assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
  });
  it('for a class, it is `Klass.prototype`', function() {
    class Klass {}
    const proto = Reflect.getPrototypeOf(new Klass());
    assert.equal(proto, Klass.prototype);
  });
  it('works also for an old-style "class"', function() {
    function Klass() {}
    const proto = Reflect.getPrototypeOf(new Klass());
    assert.equal(proto, Klass.prototype);
  });
  it('an array has a prototype too', function() {
    let arr = [];
    const expectedProto = Reflect.getPrototypeOf(arr);
    assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
  });
});

//_______________________________________________________________________________________
// Reflect.construct() 
// http://tddbin.com/#?kata=es6/language/reflect/construct

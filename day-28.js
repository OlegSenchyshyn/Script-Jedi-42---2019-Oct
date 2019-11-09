// Day 28 - Functional approach
// Function within a function
// http://www.codewars.com/kata/a-function-within-a-function

const always = n => () => n;

//___________________________________________________________
// Singleton pattern 
// https://www.codewars.com/kata/singleton-pattern/train/javascript

function Singleton() {
  return (Singleton.instance = Singleton.instance || this);
}

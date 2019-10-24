//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false; 
  for (const i of s1) if (s1.has(i) !== s2.has(i)) return false;
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}

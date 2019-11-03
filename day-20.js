//#37: Unlock new weapon---RegExp Object 
//http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const animal = [];
  for (let i of count) {
    animal.push((animals.match(new RegExp(i, 'g')) || []).length);
  }
  return animal;
}







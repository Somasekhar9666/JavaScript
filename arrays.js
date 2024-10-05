let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
//(3) ['c', 'd', 'e']
// ['c', 'd']
console.log(arr.slice(-2));
console.log(arr.slice(-1));
// ['d', 'e']
// ['e']

//shollow copy
console.log(arr.slice());
console.log([...arr]);
//['a', 'b', 'c', 'd', 'e']
//['a', 'b', 'c', 'd', 'e']

//SPLICE-->mutatates the array
console.log(arr.splice(2));
console.log(arr);
// ['c', 'd', 'e']
// ['a', 'b']

//REVERSE---> mutates the array
console.log(arr.reverse());

//JOIN
console.log(arr.join());

// AT method

const arr2 = [2, 3, 4];
console.log(arr2[0]);
//2

console.log(arr2.at(0));
//2
console.log(arr[arr2.length - 1]);
//2
console.log(arr.slice(-1)[0]);
//2 return  subarray , so [0] gives start element

//looping

//1. forEach
//In JavaScript, when you use the forEach() method on an array, the callback function you provide automatically receives three arguments:

//Current element (commonly referred to as number in the example).
//Index of the current element in the array.
//Array itself.

const numbers = [1, 2, 3, 4, 5];

// Use forEach to loop through the array and perform operations
numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}, Square: ${number ** 2}`);
});

const fruits = ["Apple", "Banana", "Mango"];

// Callback receives: current element, index, and array
fruits.forEach((fruit, index, array) => {
  console.log(`Fruit: ${fruit}, Index: ${index}`);
});

//with out call back
fruits.forEach(function (fruit, index, array) {
  console.log(`Fruit: ${fruit}, Index: ${index}`);
});

//for each loop on MAPS and SETS
const myMap = new Map([
  ["name", "John"],
  ["age", 25],
  ["city", "New York"],
]);

myMap.forEach((value, key, map) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

//Key: name, Value: John
//age, Value: 25
//Key: city, Value: New York

const mySet = new Set([1, 2, 3, 4, 5, 5, 5]);
console.log(mySet);
mySet.forEach((value, index, set) => {
  console.log(`Value: ${value}  index:${index}`);
});
//**IN SETS BOTH INDEX and VALUE is SAME , because it SETS THERE IS NO ORDER < SO NO INDEX
//{1, 2, 3, 4, 5}
//Value: 1  index:1
//Value: 2  index:2
//Value: 3  index:3
//Value: 4  index:4
//Value: 5  index:5

//SO USE '_'

mySet.forEach((value, _, set) => {
  console.log(`Value: ${value}  `);
});
//Value: 1
//Value: 2
// Value: 3
// Value: 4
//Value: 5

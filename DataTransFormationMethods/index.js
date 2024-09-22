/*map , filter , reduce are the authentic to arrays because this methods  are ordered iteration  methods , so array suport index and order

but objects , sets and maps are not odered data stuctures so you must  convert them to array before to use the methods*/

//using map , filter and reduce on arrays(direct)
//map:
const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

//filter
const numbers2 = [1, 2, 3, 4];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

//reduce
const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

//INDIRECT
/* using map , filter ,reduce on objects , sets and maps*/
/*OBJECTS Data Strucute*/
/*1. on objects */
/*   you can use Object.keys() or Object.entries(): to convert into arrys  */
const obj = { a: 1, b: 2, c: 3 };
const valuesSquared = Object.keys(obj).map((key) => obj[key] * obj[key]);
console.log(valuesSquared); // Output: [1, 4, 9]

const objj = { a: 1, b: 2, c: 3 };
const filteredKeys = Object.keys(objj).filter((key) => obj[key] > 1);
console.log(filteredKeys); // Output: ['b', 'c']

const objjj = { a: 1, b: 2, c: 3 };
const total = Object.entries(objjj).reduce(
  (acc, [key, value]) => acc + value,
  0
);
console.log(total); // Output: 6

/*SETS Data Strucute*/
//*on Sets ---> use spred operator or Array.from method to convert a set in to aaray*/

/*const numSet = new Set([1, 2, 3]);
const array= [...numSet]
 so array.map() will work*/

const numSet = new Set([1, 2, 3]);
const squaredSet = Array.from(numSet).map((num) => num * num);
console.log(squaredSet); // Output: [1, 4, 9]

const numSet2 = new Set([1, 2, 3]);
const evenSet = Array.from(numSet2).filter((num) => num % 2 === 0);
console.log(evenSet); // Output: [2]

const numSet3 = new Set([1, 2, 3]);
const total1 = Array.from(numSet3).reduce((acc, num) => acc + num, 0);
console.log(total); // Output: 6

/*MAPS Data Strucute*/
/* use Map.entries()  or Array.from()  to convert the MAP Data stcture into the Array */
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const valuesSquared1 = Array.from(map.values()).map((value) => value * value);
console.log(valuesSquared1); // Output: [1, 4]

const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const filteredEntries = Array.from(map1).filter(([key, value]) => value > 1);
console.log(filteredEntries); // Output: [['b', 2], ['c', 3]]

const map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const totall = Array.from(map2.values()).reduce((acc, value) => acc + value, 0);
console.log(totall); // Output: 6

//using Map.entries()
const map11 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const arryyy = [...map11.entries()]; // [['a',1],["b", 2],["c", 3]]
const multipliedValues11 = arryyy.map((key, value) => value * 2);
console.log(multipliedValues11);
//[2,4,6]

/*The sort() function in JavaScript is a versatile method used for sorting elements of an array in place. By default, 
it converts elements to strings and sorts them in lexicographical (dictionary) order. However, 
with a custom comparator function, it can be used to sort numbers, strings, or objects based on various criteria.*/

/*Key Points about sort() Function:
Mutates the original array: The sort() method modifies the array in place. It doesn’t return a new array but alters the existing one.

Lexicographical sorting by default: If no comparator function is provided, it sorts elements as strings by default, even if the array contains numbers.

Comparator function: To handle sorting of numbers or more complex data (like arrays of objects), a custom comparator function can be passed.*/

//SYNTAX
array.sort([compareFunction])


EX:
//1.With Normal Strings
const fruits = ["apple", "banana", "mango", "orange"];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'mango', 'orange']


/*2. Sorting Numbers
When sorting numbers without a comparator function, JavaScript converts the numbers into strings and sorts them lexicographically. This leads to incorrect results for numerical sorting.

Example (Incorrect Number Sorting):******************/
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort();
console.log(numbers);  // Output: [1, 10, 100, 25, 40, 5]  (lexicographical order)
//Here, numbers are treated as strings: '1', '10', '100', '25', etc., which results in lexicographical sorting.




/*Correct Sorting of Numbers
To sort numbers in numerical order, you must provide a compare function that subtracts two numbers. This ensures that the sort() function compares the numbers correctly.*/

//Example (Numerical Sorting with compare function):
const numbers2 = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log(numbers2);  // Output: [1, 5, 10, 25, 40, 100]

/****************Explanation:*/
//a - b: When a - b returns a negative value, a is placed before b.
//b - a: To sort in descending order, use b - a.

//Example (Descending Order for Numbers):
numbers.sort((a, b) => b - a);
console.log(numbers);  // Output: [100, 40, 25, 10, 5, 1]










//3. Sorting Objects
/*You can also sort arrays of objects based on object properties. You’ll need to pass a comparator function that extracts and compares these properties.*/

//Example (Sorting Objects by Numeric Property):
const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
  ];
  
  people.sort((a, b) => a.age - b.age);
  console.log(people);
  // Output: [{name: 'Bob', age: 20}, {name: 'John', age: 25}, {name: 'Alice', age: 30}]


//Example (Sorting Objects by String Property):
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
// Output: [{name: 'Alice', age: 30}, {name: 'Bob', age: 20}, {name: 'John', age: 25}]


/* Sorting Strings with localeCompare()
The localeCompare() method allows for more sophisticated string sorting, taking locale-specific rules into account, such as how accented characters should be sorted.*/
//Example (Locale-aware Sorting):
const names = ['Müller', 'Maier', 'Özil', 'Schulz'];
names.sort((a, b) => a.localeCompare(b));
console.log(names);  // Output: ['Maier', 'Müller', 'Özil', 'Schulz']






const bools = [true, false, true, false];
bools.sort();
console.log(bools);  // Output: [false, false, true, true]




const peoples = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Eve', age: 30 }
  ];
  
  people.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
  console.log(peoples);
  // Output: [{name: 'Bob', age: 25}, {name: 'John', age: 25}, {name: 'Alice', age: 30}, {name: 'Eve', age: 30}]
  
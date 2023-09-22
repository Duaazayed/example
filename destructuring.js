// Array destructuring

const numbers = [1, 2, 3, 4, 5];

// Extract values from the array
const [first, second, ...rest] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]

// Object destructuring

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };
  
  // Extract values from the object
  const { firstName, lastName, age } = person;
  
  console.log(firstName);  // 'John'
  console.log(lastName);   // 'Doe'
  console.log(age);        // 30
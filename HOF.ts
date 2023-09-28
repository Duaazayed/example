// A higher-order function that takes a function as an argument
function applyOperation(x: number, y: number, operation: (a: number, b: number) => number): number {
  return operation(x, y);
}

// Example usage of applyOperation with different operations
const add1 = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

console.log(applyOperation(5, 3, add1)); // Output: 8
console.log(applyOperation(5, 3, subtract)); // Output: 2

// A curried function to add two numbers
function add(x: number) {
    return function(y: number) {
      return x + y;
    };
  }
  
  // Usage of the curried add function
  const addFive = add(5);
  console.log(addFive(3)); // Output: 8
  
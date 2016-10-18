var output = [];

function fizzBuzz(number) {
  for (i = 1; i <= number; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
          console.log("FizzBuzz");
          output.push("FizzBuzz");
      } else if (i % 3 === 0) {
          console.log("Fizz");
          output.push("Fizz");
      } else if (i % 5 === 0) {
          console.log("Buzz");
          output.push("Buzz");
      } else {
          console.log(i);
          output.push(i);
      }
  };
}
var number = prompt("How far to play FizzBuzz up to?");

fizzBuzz(number);

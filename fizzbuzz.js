function fizzBuzz(number) {
  for (i = 1; i <= number; i++) {

    var output = "";

      if (i % 3 === 0) { output += "Fizz"; }
      if (i % 5 === 0) { output += "Buzz"; }

      if (output === "") { output = i; }

          console.log(output);
      }

}
var number = prompt("How far to play FizzBuzz up to?");

fizzBuzz(number);

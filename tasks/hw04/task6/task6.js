/*
Get an integer number by prompt(). Perform validation
  (make sure that the input is valid - not empty, number,
  integer - by Number.isInteger().
  Example of usage:
		if (Number.isInteger(num) === true)
			   console.log('this is integer'))

   Use ternary operator and tell if the number is even or odd.*/

let num = +prompt("Enter an integer number")

if (Number.isInteger(num) === true)
	console.log(`The number ${num} is ${num % 2 == 0 ? "even" : "odd"}`)
else
	console.log("You didn't enter an integer number.")

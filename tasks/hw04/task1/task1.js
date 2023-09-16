let firstName = 'John';
let lastName = 'Doe';
let birthYear = 1990;

let currentYear = new Date().getFullYear();

// Calculate the age of the person and print out to the console: "Hello, <firstName> <lastName>, you are <age> years old."

let age = currentYear - birthYear;
console.log(`Hello, ${firstName} ${lastName}, you are ${age} years old.`);

if (firstName + lastName != "John Smith")
	console.log("You've got an unusual name.")

if (age >= 16)
	console.log("You can learn to drive!")
else
	console.log("driving is postponed for a little bit.")

console.log(typeof currentYear)

console.log("Meat\nPotatoes\nBeans\n")

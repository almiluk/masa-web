/* There are 2 variables with the values: name of the person
		 and their birth year.
	  Use two more variables, to get the current date and
			 to calculate the age.
	  If the age is not dividible by 10, congratulate
		   the person at the console
	  (or by document.write(str)), like in the example:
			 "Yosi, congratulations, you're 16!"
	  If the age is ended by 0 (round number),
	  congratulate the person  at the console
	  (or by document.write(string)) like this:
	  "Yosy, congratulations with your 40th anniversary!".
	  If this person is also older than 60, show at the console
	  (or by document.write(string)) too: "Оооо, you're like Methuselach!" */

let name = prompt("What's your name?");
let birthYear = +prompt("What's your birth year?");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;


if (age % 10 != 0) {
	console.log(`${name}, congratulations, you're ${age}!`)
} else if (age % 10 == 0) {
	console.log(`${name}, congratulations with your ${age}th anniversary!`)

	if (age > 60)
		console.log(`Оооо, you're like Methuselach!`)
}
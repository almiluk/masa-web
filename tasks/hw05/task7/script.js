/*
Calculate age. Write function that gets a birth year
	of a person, birth month and birth day,
	gets the current date by the next statements:

		var currDate = new Date();
		var currYear = currDate.getFullYear();
		var currMonth = currDate.getMonth();
		var currDay = currDate.getDate();

   and returns the age of the person. Pay attention that getMonth()
   returns month number (0 - January, 1 - February, 2 - March, etc.),
   so you may make month input by number too.
 */

function getAge(year, month, day) {
	let currDate = new Date();
	let currYear = currDate.getFullYear();
	let currMonth = currDate.getMonth();
	let currDay = currDate.getDate();

	let age = currYear - year;

	if (currMonth < month) {
		age--;
	} else if (currMonth === month && currDay < day) {
		age--;
	}

	return age;
}

let birthDate = prompt('Enter your birth date in format YYYY-MM-DD').split('-');
console.log(getAge(+birthDate[0], +birthDate[1], +birthDate[2]));

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

function getRetirementAge(firstName, birthYear, birthMonth, birthDay, retirementAge) {
	let age = getAge(birthYear, birthMonth, birthDay);
	let retirementYear = birthYear + retirementAge;

	if (age < retirementAge) {
		console.log(`${firstName} is going to retire ${retirementAge - age} years from now`);
	} else {
		console.log(`${firstName} is already retired`);
	}
}

console.log(getRetirementAge('John', 1980, 5, 15, 65));

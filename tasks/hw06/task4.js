function daysInMonth(year, month) {
	let days;
	switch (month) {
		case "January":
		case "March":
		case "May":
		case "July":
		case "August":
		case "October":
		case "December":
			days = 31;
			break;
		case "April":
		case "June":
		case "September":
		case "November":
			days = 30;
			break;
		case "February":
			if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				days = 29;
			} else {
				days = 28;
			}
			break;
		default:
			days = "Wrong month name";
	}
	return days;
}


/*
Birthdays. Get day, month and year of birth for two persons.
   (No need to make all the prompts,
	you can just set them like this:

	var year1=1999, year2=1998, month1="May", month2="May",
		day1=22, day2=22)

   If they were born on the same day, the program says:
   You both were born on the same day exactly!
   If they were born on the same day but in different years,
   the program says: you've got the same birth date!
	*/

let year1 = 1999, year2 = 1998, month1 = "May", month2 = "May", day1 = 22, day2 = 22;

if (year1 == year2 && month1 == month2 && day1 == day2)
	console.log("You both were born on the same day exactly!")
else if (month1 == month2 && day1 == day2)
	console.log("You've got the same birth date!")
else
	console.log("You've got different birth dates!")

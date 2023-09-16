/*
Show opening hours of museum.

   Get current Date by "new Date()".
   Use function currentDate.getDay().
   If it returns 1, it's Monday, the museum is closed.
   If it returns 0 or 4 - it's Sunday or Wednesday,
   it's open half day from 8:00 till 12:00,
   In the other days it should be open from 8:00 till 20:00.

   Use switch.
*/

let currentDate = new Date();
let day = currentDate.getDay();
switch (day) {
	case 1:
		console.log("The museum is closed.")
		break;
	case 0:
	case 4:
		console.log("The museum is open from 8:00 till 12:00.")
		break;
	default:
		console.log("The museum is open from 8:00 till 20:00.")
		break;
}

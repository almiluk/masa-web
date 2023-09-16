/*
Our application should get a month and output it’s season
   in accordance with this specification:

	  Winter: December, January and February
	  Spring: March, April and May
	  Summer: June, July and August
	  Autumn: September, October and November

   Use switch.
*/

let month = prompt("Enter a month")
switch (month) {
	case "December":
	case "January":
	case "February":
		console.log("Winter")
		break
	case "March":
	case "April":
	case "May":
		console.log("Spring")
		break
	case "June":
	case "July":
	case "August":
		console.log("Summer")
		break
	case "September":
	case "October":
	case "November":
		console.log("Autumn")
		break
	default:
		console.log("Invalid month")
		break
}

/*
Ternary operator practice.
   a) var adminPassword = 'Rxjel$#1hs';
	  var admin1 = "Yosi", admin2 = "Noa", admin3 = "Yael"

	  Ask the user their username and
	  ask to enter a password.

	  If the username is equal to one of the admin's names
	  and if the password is equal to adminPassword,
	  show message "You're redirected to the admin area"

	  If it is wrong, alert "Access denied"

   b) Ask the user to enter a word in upper case.
	  Say if it is OK, or not in upper case.

	  Hint to how to make this check see below all the exercises.

   c) The program gets 3 numbers. It is given that none of them
	  is zero. Use ternary operator to decide
	  (without multiplying them!!!) if their product (произведение)
	  will be positive or negative
*/

let adminPassword = 'Rxjel$#1hs';
let admin1 = "Yosi", admin2 = "Noa", admin3 = "Yael"

let username = prompt("Enter your username")
let password = prompt("Enter your password")

if ((username == admin1 || username == admin2 || username == admin3) && password == adminPassword)
	console.log("You're redirected to the admin area")
else
	console.log("Access denied")

let word = prompt("Enter a word in upper case")
if (word === word?.toUpperCase())
	console.log("OK")
else
	console.log("Not in upper case")

let positive = +prompt("Enter a number") > 0
positive = prompt("Enter a number") > 0 ? positive : !positive
positive = prompt("Enter a number") > 0 ? positive : !positive

console.log(positive ? "Positive" : "Negative")

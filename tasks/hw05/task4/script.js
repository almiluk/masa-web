let num = +prompt("Enter a number")

console.log(num < 70 ? "< 70" : num > 210 ? "> 210" : "between 70 and 210")



let name = prompt("Enter your name")
let familyName = prompt("Enter your family name")
if (name && familyName)
	console.log(name + familyName == "JohnSmith" || name + familyName == "JaneSmith" || name + familyName == "JackDaniels" ? "I'm happy to see you" : "Go away")


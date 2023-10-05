let stars2Div = document.querySelector("#stars2")

stars2Div.style.textAlign = "center"
stars2Div.style.margin = "auto"

let squareSize = +prompt("Enter square size")

if (squareSize) {
	line = "*".repeat(squareSize) + "<br>"
	stars2Div.innerHTML = line.repeat(squareSize)
} else {
	alert("Incorrect value")
}

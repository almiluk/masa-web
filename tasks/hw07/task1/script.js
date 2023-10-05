let stars1Div = document.querySelector(".stars1")

stars1Div.style.backgroundColor = "green"
stars1Div.style.width = "100px"
stars1Div.style.textAlign = "center"
stars1Div.style.margin = "auto"

let squareSize = +prompt("Enter square size")

if (squareSize) {
	for (let i = 0; i < squareSize; i++) {
		stars1Div.innerHTML += "*".repeat(squareSize) + "<br>"
	}
} else {
	alert("Incorrect value")
}

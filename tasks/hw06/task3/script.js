function main() {
	let num1 = +prompt("Num1")
	let sign = prompt("Sign")
	let num2 = +prompt("Num2")

	if (!num1 || !num2 || !sign) {
		alert("Error")
		return
	}

	switch (sign) {
		case "+":
			alert(add(num1, num2))
			break
		case "-":
			alert(subtract(num1, num2))
			break
		case "*":
			alert(multiply(num1, num2))
			break
		case "/":
			alert(divide(num1, num2))
			break
		case "%":
			alert(divideIntegers(num1, num2))
			break
		case "^":
			alert(power(num1, num2))
			break
		default:
			alert("Error")
	}
}

function add(num1, num2) {
	return num1 + num2
}

function subtract(num1, num2) {
	return num1 - num2
}

function multiply(num1, num2) {
	return num1 * num2
}

function divide(num1, num2) {
	return num1 / num2
}

function divideIntegers(num1, num2) {
	return [Math.floor(num1 / num2), num1 % num2]
}

function power(num1, num2) {
	return num1 ** num2
}

main()

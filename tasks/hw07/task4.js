function prepareWordForHangman(str) {
	if (str.length <= 2)
		return str

	return str[0].toUpperCase() + "-".repeat(str.length - 2) + str[str.length - 1].toUpperCase()
}

console.log(prepareWordForHangman("strawberry"))
console.log(prepareWordForHangman("caramel"))
console.log(prepareWordForHangman("I"))
console.log(prepareWordForHangman(""))

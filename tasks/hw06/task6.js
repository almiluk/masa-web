function sumFromOneTillNum(num) {
	let res = 0
	for (let i = 1; i <= num; i++) {
		res += i
	}
	return res
}

console.log(sumFromOneTillNum(6))
console.log(sumFromOneTillNum(1))


function showEven(num) {
	res = ""
	for (let i = num % 2 == 0 ? num : num - 1; i >= 2; i -= 2) {
		res += i + ' '
	}

	return res
}

console.log(showEven(9))
console.log(showEven(10))

function revertTheWord(word) {
	let res = ''
	for (let i = word.length - 1; i >= 0; i--) {
		res += word[i] + ' '
	}
	return res
}

console.log(revertTheWord('cat'))

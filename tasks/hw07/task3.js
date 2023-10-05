function omitVowels(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let result = '';
	for (let i = 0; i < str.length; i++) {
		if (!vowels.includes(str[i].toLowerCase())) {
			result += str[i];
		}
	}
	return result;
}

console.log(omitVowels('Hello World!'))
console.log(omitVowels("strange"))
console.log(omitVowels("astonishment"))

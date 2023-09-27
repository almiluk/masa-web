let animals = [`cAt`, `DoG`, `giRaFFe`, `LION`, `tiGer`, `monkey`]

for (let i = 0; i < animals.length; i += 2) {
	animals[i] = animals[i].toLowerCase()
}

for (let i = 1; i < animals.length; i += 2) {
	animals[i] = animals[i].toUpperCase()
}

console.log(`after the change "animals":`, animals);


for (let i = 0; i < animals.length; i++) {
	console.log(animals[i][0] + animals[i][animals[i].length - 1])
}

for (let i = 0; i < animals.length; i++) {
	console.log(i + 1 + ". " + animals[i])
}

for (let i = animals.length; i >= 0; i--) {
	console.log(i + 1 + ". " + animals[i])
}

let adjectives = [`black`, `curious`, `spotted`, `scary`, `striped`, `happy`]

for (let i = 0; i < animals.length; i++) {
	console.log(adjectives[i] + " " + animals[i])
}

for (let i = 0; i < animals.length; i++) {
	console.log(adjectives[animals.length - 1 - i] + " " + animals[i])
}

let words = [`I`, `am`, `never`, `too`, `late`, `,`, `the`, `others`, `are`, `just`, `too`, `early`]

let combinedWords = ""
for (let i = 0; i < words.length; i++) {
	combinedWords += words[i] + " "
}

console.log(combinedWords)


let num = [44, 22, 33, 11, -66, -88, 22, 33]
// find average of all numbers and print it

let sum = 0
for (let i = 0; i < num.length; i++) {
	sum += num[i]
}

console.log(sum / num.length)

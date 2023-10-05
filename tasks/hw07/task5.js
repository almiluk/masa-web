// Subtask A
const animals = ['cAt', 'DoG', 'giRaFFe', 'LION', 'tiGer', 'monkey']

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i].slice(0, 2).toLowerCase())
}

// Subtask B
const colors = ['blue', 'yellow', 'orange', 'green']
const drinks = ['tea', 'coffee', 'milk', 'water', 'juice']

let tmp = colors.shift()
colors.unshift(drinks.shift())
drinks.unshift(tmp)
tmp = colors.pop()
colors.push(drinks.pop())
drinks.push(tmp)

console.log(colors)
console.log(drinks)


// Subtask C
const colors2 = ['   red', '    white   ', '   yellow ', 'green   ', '  lime  ', ' purple ', '   blue', 'teal   ', ' aquamarine   ', '  turquoise ']

for (let i = 0; i < colors2.length; i++) {
	console.log(colors2[i].trim())
}

for (let i = 0; i < colors2.length; i++) {
	console.log(i % 2 == 0 ? colors2[i].trimStart() : colors2[i].trimEnd())
}

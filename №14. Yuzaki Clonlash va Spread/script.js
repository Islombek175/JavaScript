// Primitiv

let a = 10,
	b = a

b = b + 10

console.log(a + b)

// Object
// Yuzaki clonlash
// Chuqur clonlash

const person = {
	name: 'Islombek',
	age: 16,
	hobbies: {
		sport: 'football',
		game: 'WOTB',
	},
}

const sescondPerson = person

sescondPerson.name = 'Sunnatbek'
sescondPerson.age = '15'

console.log(person)
console.log(sescondPerson)

// #1. Itteratsiya

const copyObj = obj => {
	let clone = {}

	for (let key in obj) {
		clone[key] = obj[key]
	}

	return clone
}

const thirdPerson = copyObj(person)

thirdPerson.name = 'Mustafo'
thirdPerson.age = 15
thirdPerson.hobbies.game = 'Roblox'

console.log(thirdPerson)

// #2. Object assign

const fourthPerson = Object.assign({}, person)

fourthPerson.name = 'Yusuf'
fourthPerson.age = 19
fourthPerson.hobbies.game = 'UFC'

console.log(fourthPerson)

// #3. Spread operator

const fifthPerson = { ...person }

fifthPerson.name = 'Adham'
fifthPerson.age = 20
fifthPerson.hobbies.game = 'Mortal Comabt'

console.log(fifthPerson)

// Array clonlash
// #1. Slice yordamimda
const cars = ['BWM', 'SUZUKI', 'FERRARI', 'CHEVROLET']

const clone = cars.slice()
clone.push('MERCEDES')

console.log(cars)
console.log(clone)

// #2. Spread operator ES8
const copy = [...clone]

copy.push('Subaru')
console.log(copy)

function log(a, b, c) {
	console.log(`First log: ${a}`)
	console.log(`Second log: ${b}`)
	console.log(`Third log: ${c}`)
}

const nums = [1, 2, 3]

log(...nums)

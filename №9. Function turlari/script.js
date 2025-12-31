let age = 16 //global o'zgaruvchi

console.log(age)

// -------FUNCTION DECLORATION-------
function showHelloToUser(userName) {
	let name = 'Islombek' //local o'zgaruvchi
	age = 18
	console.log(`Hello ${userName}! He is ${age} years old.`)
}

showHelloToUser(prompt('Ismingizni kiriting', ''))

function calculate(a, b) {
	return a + b //ma'lumot qaytaradi, va uni o'zgaruvchiga saqlasa bo'ladi
}

const firstCalc = calculate(2, 5)
console.log(firstCalc)

// -------FUNCTION EXPRESSION-------
const showHelloWorld = function () {
	console.log('Hello World!')
}

showHelloWorld()

// -------ARROW FUNCTION-------
const calculate = (a, b) => {
	return a + b
}

console.log(calculate(5, 6))

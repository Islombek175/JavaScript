// ____WINDOW____

alert('This website for adults!')
// Xabar!

const isAdult = confirm('Are you above 18?')
// Ruxsat

const usersName = prompt('What is your name?', ' ')
// Savol
console.log(usersName)

const usersAge = +prompt('How old are you?', '18')
console.log(usersAge)

// =+ Number
// " ", bo'sh qator promptdan keyin

// ____INTERPOLATSIYA____

const firstName = 'Islombek'
const lastName = 'Matkarimov'
const age = 16

console.log(
	'My name is ' +
		firstName +
		' ' +
		lastName +
		', ' +
		'I am ' +
		age +
		' years old'
)

console.log(`My full name is ${firstName} ${lastName}, I'm ${age} years old`)

// ____OPERATORLAR____

let x = 6
let y = 4

console.log(x + y, "qo'shuv")
console.log(x - y, 'ayiruv')
console.log(x * y, "ko'paytiruv")
console.log(x / y, "bo'luv")
console.log(x % y, 'qoldiq')

// MATN + har qanday ma'lumot = MATN

console.log(x++, 'increment')
console.log(y--, 'decrement')

// POSTFIX
// x++
// y--
// O'zgaruvchi o'zgaradi

// PREFIX
// ++x
// --y
// O'zgaruvchi o'zgarmidi(faqat 1 marta o'zgaradi)

// && va -- True && True => True
// || yoki -- False || True || False => False

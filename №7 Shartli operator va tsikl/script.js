// --SHARTLI OPERATOR--

const trafficLight = 'red'

if (trafficLight == 'red') {
	console.log('Stop!')
} else if (trafficLight == 'yellow') {
	console.log('Prepare!')
} else if (trafficLight == 'green') {
	console.log('Goo!')
}

switch (trafficLight) {
	case 'red':
		console.log('Stop!')
		break
	case 'yellow':
		console.log('Prepare!')
		break
	case 'green':
		console.log('Goo!')
		break
	default:
		console.log("Uyo buyo qarab o'tib ket")
		break
}

const userAge = +prompt('Yoshingizni kiriting...', '')
if (userAge >= 18) {
	console.log('Acces')
} else {
	console.log('No acces')
}

const age = 16
console.log(age == '16')
console.log(age === '16')
// == faqat qiymatni tekshiradi
// === qiymat va ma'lumot turini tekshiradi

// __________________________________________________
//	--TSIKL--
number = 1

// For
for (number; number <= 5; number++) {
	if (number == 3) {
		break
		// continue
	}
	console.log(number)
}

// While
while (number <= 5) {
	console.log(number, 'number')
	number++
}

// Do While
do {
	console.log(number, 'number')
	number++
} while (number <= 5)

// Ternarniy operator
age > 18 ? console.log('Acces') : console.log('No acces')

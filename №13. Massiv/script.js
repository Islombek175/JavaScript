// ------Massivlar------

const colors = ['red', 'green', 'blue', 'yellow']

console.log(colors)
console.log(colors.length)
console.log(colors[1]) // index yordamida elementni olish

// Push - massivni ohiriga yangi element qo'shish
// Pop - massivni ohiridagi yangi elementni o'chirish

console.log(colors.push('white'), colors) // ohiriga +1
console.log(colors.pop(), colors) // ohiridan -1

// Unshift - massivni boshiga yangi element qo'shish
// Shift - massivni boshidagi yangi elementni o'chirish

console.log(colors.unshift('black'), colors) // boshiga +1
console.log(colors.shift(), colors) // boshidan -1

// ------Ittaratsiya------

const cars = ['chevrolet', 'suzuki', 'opel', 'ferrari', 'bmw']

for (let i = 0; i < cars.length; i++) {
	console.log(1 + i, cars[i])
}

for (let car of cars) {
	console.log(car)
}

cars.forEach((car, index, arr) => {
	console.log(`${1 + index}. ${car} in array ${arr}`)
})

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.push(6), numbers)

// Split

const socialMedias = 'YouTube, Telegram, Instagram'

const arr = socialMedias.split(', ') // String -> Array
const text = arr.join(' - ') // array - String

console.log(arr)
console.log(text)

const a = ['asd', 'qwe', 'fgh', 'bsh']
const n = [2, 14, 5, 6, 89, 4]

n.sort(compareNum)
function compareNum(a, b) {
	return a - b
}
console.log(n) // son o'sish bo'yicha sortirovka

console.log(a.sort()) // alphabet bo'yicha sortirovka

// Eski usul

// const box = document.getElementById('box')
// const hearts = document.getElementsByClassName('heart')

// Yangi usul

const box = document.querySelector('.box'),
	buttons = document.querySelectorAll('button'),
	circles = document.querySelectorAll('.circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = document.querySelectorAll('.heart'),
	app = document.querySelector('.app')

box.style.backgroundColor = 'yellow' // style o'zgartirish
box.style.width = '600px' // style o'zgartirish

// buttons[0].style.width = '100px' // style o'zgartirish
// buttons[1].style.height = '100px' // style o'zgartirish
// buttons[2].style.borderRadius = '30%' // style o'zgartirish

for (let circle of circles) {
	circle.style.cssText = 'background-color: yellow' // style o'zgartirish
}

const div = document.createElement('div') // element yaratish
div.classList.add('heart') // class berish
div.style.backgroundColor = 'black' // style o'zgartirish

// wrapper.append(div) // elementni documentni ohiritga qo'shish
wrapper.prepend(div)

circles[0].remove() // elementni o'chirish

buttons[2].replaceWith(circles[2]) // elementni joyini almashtirish

app.append(div)

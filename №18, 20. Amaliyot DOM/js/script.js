document.addEventListener('DOMContentLoaded', () => {
	const promoAdv = document.querySelector('.promo__adv'),
		promoGenre = document.querySelector('.promo__genre'),
		promoBg = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('.add'),
		input = document.querySelector('.adding__input'),
		submitSerieBtn = document.querySelector('.submit__serie-button'),
		checkbox = document.querySelector('[type="checkbox"]')

	addForm.addEventListener('submit', event => {
		event.preventDefault()
		let newSerie = input.value

		if (newSerie != '') {
			if (newSerie.length > 18) {
				newSerie = `${newSerie.slice(0, 18)}...`.toUpperCase()
				seriesDB.series.push(newSerie.toUpperCase())
				sort(seriesDB.series)
			} else {
				seriesDB.series.push(newSerie.toUpperCase())
				sort(seriesDB.series)
			}
			if (checkbox.checked) {
				console.log('Sevimli serial qo’shilidi')
			}
		}

		setList()
		event.target.reset()
	})

	promoAdv.style.display = 'none'
	promoGenre.innerText = 'COMEDY'
	promoBg.style.cssText = 'background-image: url(./img/1.jpg)'

	const seriesDB = {
		series: [
			'OMAR',
			'THE FINAL LEGACY',
			'ERTUGRUL',
			'MAGNIFICENT CENTURY',
			'GREAT SELJUKS: GUARDIANS...',
		],
	}

	function sort(arr) {
		arr.sort()
	}

	function setList() {
		seriesList.innerHTML = ''

		seriesDB.series.forEach((serie, index) => {
			seriesList.innerHTML += `<li class="promo__interactive-item">${
				1 + index
			}. ${serie} <div class="delete"></div></li>`
		})

		document.querySelectorAll('.delete').forEach((trashBtn, index) => {
			trashBtn.addEventListener('click', () => {
				trashBtn.parentElement.remove()
				seriesDB.series.splice(index, 1)
			})
		})
	}

	sort(seriesDB.series)
	setList()
})

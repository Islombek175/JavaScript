let numberOfSeries

startApp()

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	privat: true,
}

detectingLevel()
setFavouriteSeries()
writeGenres()
showDb()

function startApp() {
	while (
		numberOfSeries == null ||
		numberOfSeries == '' ||
		isNaN(numberOfSeries) ||
		numberOfSeries == undefined
	) {
		numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
	}
}

function setFavouriteSeries() {
	for (let i = 0; i < 2; i++) {
		let serie = prompt(`Oxirgi ko’rgan serialingiz? ${1 + i}`, '')
		let grade = +prompt(`Nechi baxo berasiz? ${1 + i}`, '')

		if (serie != '' && serie != null && grade != '' && grade != null) {
			seriesDB.series[serie] = grade
		} else {
			i--
		}
	}
}

function detectingLevel() {
	if (numberOfSeries > 10) {
		console.log('Siz serialchi zvezda ekansiz')
	} else if (numberOfSeries >= 5) {
		console.log('Siz classik tamoshabin ekansiz')
	} else if (numberOfSeries < 5) {
		console.log('Kam serial ko’ripsiz')
	}
}

function showDb() {
	if (seriesDB.privat) {
		console.log(seriesDB)
	} else {
		console.log('Private!')
	}
}

function writeGenres() {
	for (let i = 0; i < 3; i++) {
		let genre = prompt(`Yaxshi ko’rgan janringiz? ${1 + i}`, '')

		if (genre != null && genre != '') {
			seriesDB.genres[i] = genre
		} else {
			i--
		}
	}
}

const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
const API2_URL = 'https://type.fit/api/quotes'
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const PROXY2_URL = 'https://cors-proxy.htmldriven.com/?url='

const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')

// Get Quote from API
async function getQuote() {
	try {
		const response = await fetch(PROXY_URL + API_URL)
		const data = await response.json()
		console.log(data)
		// If Author is an empty string, populate with 'Unknown'
		authorText.innerText = data.author || 'Unknown'
		// Reduce font size for quotes > 120 characters
		if (data.quoteText.length > 60) {
			quoteText.classList.add('long-quote')
		} else {
			quoteText.classList.remove('long-quote')
		}
		quoteText.innerText = data.text
	} catch (error) {
		console.log('There was an error: ', error)
		getQuote()
	}
}

// On Load
getQuote()

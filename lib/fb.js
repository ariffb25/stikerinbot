const fetch = require('node-fetch') 
const cheerio = require("cheerio")
const axios = require("axios")
function fbDown(url) {
	return new Promise((resolve, reject) => {
		function rand() {
			return `${Math.floor(Math.random() * 1000000)}`
		}
		let params = new URLSearchParams()
		params.append('url', url)
		fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
				method: 'POST',
				body: params
			})
			.then(res => res.text())
			.then(res => {
				const $ = cheerio.load(res)
				y = 'pinterest_' + rand() + '.mp4'
				x = $('video').find('source').attr('src')
				data = {
					file: y,
					url: x
				}
				if (typeof x == 'undefined') return resolve({
					status: false
				})
				resolve({
					status: true,
					data
				})
			}).catch(reject)
	})
}

module.exports = { fbDown }
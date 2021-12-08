const axios = require('axios')

const getBuffer = async (url, options) => {
    try {
	options ? options : {}
	const res = await axios({
	    method: "get",
	    url,
	    headers: {
		'DNT': 1,
		'Upgrade-Insecure-Request': 1
	    },
	    ...options,
	    responseType: 'arraybuffer'
	})
	return res.data
    } catch (e) {
	console.log(`Error : ${e}`)
    }
}


module.exports = { getBuffer }
let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://kuhong-api.herokuapp.com/api/sindiran?apikey=4qk0g7Dgs2Hr-5xBdsTgQmdS4JN`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['sindiran']
handler.tags = ['quotes']
handler.command = /^(sindiran)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
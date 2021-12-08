let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nomor Telepon yang akan dispam OTP PizzaHut', m)

	axios.get(`https://api.xteam.xyz/spammer/pizzahut?no=${text}&APIKEY=APIKEYMU`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['pizzahut'].map(v => v + ' <no hp>')
handler.tags = ['spammer']
handler.command = /^(pizzahut)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

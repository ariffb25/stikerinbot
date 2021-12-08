let axios = require("axios");

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')

	axios.get(`http://zekais-api.herokuapp.com/tahlil`).then ((res) => {
	 	let hasil = `*${res.data.title}*\n\n${res.data.arabic}\n\nArtinya :\n${res.data.translate}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['sholawat', 'tahlil']
handler.tags = ['quotes']
handler.command = /^(sholawat|tahlil)$/i
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

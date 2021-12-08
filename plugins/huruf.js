let axios = require("axios");
let handler = async(m, { conn, text }) => {

    await m.reply('Searching...')
	axios.get(`https://videfikri.com/api/jumlahhuruf/?query=${text}`).then ((res) => {
	 	let hasil = `${res.data.result.jumlah}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['huruf <teks>']
handler.tags = ['tools']
handler.command = /^(huruf)$/i
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
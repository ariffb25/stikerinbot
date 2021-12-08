let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Namamu', m)

	axios.get(`https://api.terhambar.com/ninja?nama=${text}`).then ((res) => {
	 	let hasil = `Nama Ninja *${text}*\nAdalah : ${res.data.result.ninja}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ninja'].map(v => v + ' <nama>')
handler.tags = ['tools']
handler.command = /^(ninja)$/i
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
handler.limit = false

module.exports = handler
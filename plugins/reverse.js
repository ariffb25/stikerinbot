let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

	axios.get(`https://videfikri.com/api/hurufterbalik/?query=${text}`).then ((res) => {
	 	let hasil = `${res.data.result.kata}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['reverseteks'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(reverseteks)$/i
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

module.expo,rts = handler
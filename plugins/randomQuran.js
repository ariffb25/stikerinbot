let axios = require("axios");
let handler = async(m, { conn, text }) => {


	axios.get(`https://videfikri.com/api/randquran/`).then ((res) => {
	 	let hasil = `ARTI SURAT	: ${res.data.result.arti}
ASMA		: ${res.data.result.asma} | ${res.data.result.nama}
AYAT		: ${res.data.result.ayat}
Di turunkan	: ${res.data.result.tipe}
AUDIO		: ${res.data.result.audio}
KET SURAT	: ${res.data.result.keterangan}
	ANDY BOTZ`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['rquran']
handler.tags = ['islam']
handler.command = /^(rquran)/i
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

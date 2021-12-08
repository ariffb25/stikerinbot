let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Silahkan ketik apa yg mau kamu cari!!', m)

  await m.reply('*[❗] WAIT, Tunggu Sebentar:v.*')
	axios.get(`https://videfikri.com/api/wiki/?query=${text}`).then ((res) => {
	 	let hasil = `*Serch :${text}*\n\n*Di Temukan :${res.data.result.isi_konten}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['wiki'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(wiki)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    //if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

  await m.reply('Sedang di proses kak:b')
	axios.get(`http://docs-jojo.herokuapp.com/api/cersex`).then ((res) => {
	 	let hasil = `~> *Judul* : ${res.data.result.judul}\n\n${res.data.result.cersex}`

    conn.sendFile(m.chat, res.data.result.img, 'carsex.jpeg', hasil, m)
	})
}
handler.help = ['cersex'].map(v => v + ' <nama>')
handler.tags = ['quotes']
handler.command = /^(carsex|cerita_sex)$/i
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

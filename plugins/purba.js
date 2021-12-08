let axios = require("axios")

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Teksnya?', m)

	axios.get(`http://lolhuman.herokuapp.com/api/bahasapurba?apikey=31caf10e4a64e86c1a92bcba&text=${text}`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['purba'].map(v => v + ' <teks>')
handler.tags = ['tools']
handler.command = /^(purba)$/i
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

let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [kata] = text.split `|`

    if (!kata) return conn.reply(m.chat, 'Masukan kata', m)
  await m.reply(global.wait)
	axios.get(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${kata}`).then ((res) => {
	 	let hasil = res.data.result.map(res=>`*Judul: ${res.title}*\n*Rating: ${res.rating}*\n*Link: ${res.url}*`).join('\n\n')

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['bacakomik <judul>']
handler.tags = ['weebs']
handler.command = /^(bacakomik)$/i
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

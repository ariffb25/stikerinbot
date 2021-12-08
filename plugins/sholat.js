let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Daerahnya', m)

  await m.reply('Searching...')
	axios.get(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${text}`).then ((res) => {
	 	let hasil = `Jadwal Sholat Daerah *${text}*\n\nSubuh : ${res.data.data.object.Shubuh}\nDzuhur : ${res.data.data.object.Dzuhur}\nAshar : ${res.data.data.object.Ashr}\nMaghrib : ${res.data.data.object.Maghrib}\nIsya : ${res.data.data.object.Isya}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['sholat'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(sholat)$/i
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

let { getBuffer, succes } = require('../lib/functions.js');
let axios = require("axios");

let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')

   let covid = await getBuffer('https://i.ibb.co/8db5c7S/Coronavirus-2.jpg')

	axios.get(`https://api.kawalcorona.com/indonesia/`).then ((res) => {
      let hasil = `*INFO COVID-19 INONESIA*\n\nPositif : ${res.data.positif}\nMeninggal : ${res.data.meninggal}\nDirawat : ${res.data.dirawat}\nSembuh : ${res.data.sembuh}\n\nTetap Jaga Kesehatan, Pakai Masker, Stay At Home ♡`

    conn.sendFile(m.chat, covid, 'infocovid.jpg', hasil, m)
	})
}
handler.help = ['infocovid']
handler.tags = ['news']
handler.command = /^(infocovid)$/i
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

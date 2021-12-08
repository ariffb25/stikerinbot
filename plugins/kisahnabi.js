let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return m.reply('Silahkan masukan nama nabi,contoh *!kisahnabi adam*')

  await m.reply(global.wait)
	axios.get(`https://islamic-api-indonesia.herokuapp.com/api/data/kisahnabi?nabi=${text.toLowerCase()}`).then ((res) => {
	 	let caption = `*「 Kisah Nabi 」*\n\n*Nama:* ${res.data.result.nabi.nabi}\n*Lahir Tahun:* ${res.data.result.nabi.lahir} SM\n*Tempat Lahir:* ${res.data.result.nabi.tempat}\n*Umur:* ${res.data.result.nabi.umur} Tahun\n\n*Cerita:* ${res.data.result.nabi.kisah}`
	 	let pp = res.data.result.nabi.image
if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
  else m.reply(caption)
})
}
handler.help = ['kisahnabi']
handler.tags = ['islamic']
handler.command = /^(kisahnabi)$/i
handler.register = true

handler.fail = null
handler.limit = false

module.exports = handler
let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerahnya', m)

	axios.get(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${text}&apikey=Tobz2k19`).then ((res) => {
	 	let hasil = `Jadwal Sholat Daerah *${text}*\n\n*Jadwal* \nSHUBUH	: *${res.data.result.subuh}*\nDZUHUR	: *${res.data.result.dzuhur}*\nASHAR	: *${res.data.result.ashar}*\nMAGHRIB: *${res.data.result.maghrib}*\nISYA		: *${res.data.result.isha}*\n\n*Jadwal Lainnya*\nIMSAK	: *${res.data.result.imsak}*\nSUNRISE	: *${res.data.result.sunrise}*\nSUNSET	: *${res.data.result.sunset}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['jsholat'].map(v => v + ' <daerah>')
handler.tags = ['islam']
handler.command = /^(jsholat)$/i
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

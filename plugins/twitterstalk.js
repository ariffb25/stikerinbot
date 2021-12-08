let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap masukan Username Twitter', m)

	axios.get(`https://arugaz.my.id/api/media/stalktwitt?user=${text}`).then ((res) => {
	 	let hasil = `STALK TWITTER *${text}*\n\n*Nama* : ${res.data.result.fullname}\n*Username* : ${res.data.result.username}\n*Followers* : ${res.data.result.follower}\nFollowing* : ${res.data.result.following}\n*Bio* : ${res.data.result.descText}\n\n\n${res.data.result.descUrl}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['twitstalk','stalktwit'].map(v => v + ' <@user>')
handler.tags = ['internet']
handler.command = /^(twitstalk|stalktwit)$/i
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
handler.limit = true

module.exports = handler
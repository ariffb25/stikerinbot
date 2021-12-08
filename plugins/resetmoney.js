let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.db.data.users)
	if(!args || !args[0]) {
		var lim = 10000
	} else {
		var lim = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.money = lim)))
		conn.reply(m.chat, `*berhasil direset Rp10.000 / user*`, m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(resetmoney)$/i
handler.owner = true
handler.exp = 0
handler.fail = null
module.exports = handler

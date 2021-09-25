let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
  const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }
	await conn.updatePresence(m.chat, Presence.composing) 
	let member = participants.map(u => u.jid)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0
	var user = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
		if(typeof global.db.data.users[member[i]] != 'undefined') {
      if (global.db.data.users[member[i]].job != "x"){
        total += 1
        user.push(member[i])
      }
		}
	}
	if(total == 0) return conn.reply(m.chat, `*[ LIST JOB]*\n\nTidak ada yang menawarkan jasa apapun di grup ini`, m) 
	conn.reply(m.chat, `*[ LIST JOB ]*\n\n${user.map(v => '  ○ @' + v.replace(/@.+/, '') + ' [ ' + global.db.data.users[v].job + ' - Rp. ' + format(global.db.data.users[v].exp)  +' ]').join('\n')}\n\nKetik .sewa @user untuk menyewa orang`, m,{ contextInfo: { mentionedJid: user } })
}
handler.help = ['listjob']
handler.tags = ['fun']
handler.command = /^(listjob)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

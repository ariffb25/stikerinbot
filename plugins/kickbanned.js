let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
	const delay = time => new Promise(res=>setTimeout(res,time));
	await conn.updatePresence(m.chat, Presence.composing) 
	let member = participants.map(u => u.jid)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0

	var sider = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
		if(typeof global.db.data.users[member[i]] !== 'undefined' && !users.isAdmin && !users.isSuperAdmin) { 
      if(global.db.data.users[member[i]].isBanned == true){
        total++
        sider.push(member[i])
      }
		}
	}

	if(total == 0) return conn.reply(m.chat, `Di grup *${conn.getName(m.chat)}* tidak terdapat user yang dibanned dari bot.`, m) 

	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
		if(typeof global.db.data.users[member[i]] !== 'undefined' && !users.isAdmin && !users.isSuperAdmin) { 
      if(global.db.data.users[member[i]].isBanned == true){
				await delay(2500)
        await conn.groupRemove(m.chat, [member[i]])
      }
		}
	}
	conn.reply(m.chat, `Berhasil mengeluarkan ${total} user bot yang bermasalah dari grup *${conn.getName(m.chat)}*.`, m)
}
handler.help = ['kickbanned']
handler.tags = ['owner']
handler.command = /^(kickbanned)$/i
handler.owner = true
handler.group = true
handler.botAdmin = true
handler.fail = null
module.exports = handler
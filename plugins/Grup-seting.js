let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'open': false,
		'on': false,
		'1': false,
		'close': true,
		'close': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), '© MilfBOT', 'open', ',grup 1', 'close', ',grup 0')
		throw false
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grup <open/close>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler

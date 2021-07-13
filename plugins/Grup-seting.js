let { GroupSettingChange } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = {
		'open': false,
		'buka': false,
		'on': false,
		'1': false,
		'close': true,
		'tutup': true,
		'off': true,
		'0': true,
	}[(args[0] || '')]
	if (isClose === undefined)
		throw `
contoh:
${usedPrefix + command} tutup
${usedPrefix + command} buka
`.trim()
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['group <buka/tutup>']
handler.tags = ['group']
handler.command = /^(group)$/i
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

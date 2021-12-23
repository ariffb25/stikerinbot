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
	if (isClose === undefined) {
		await conn.send2Button(m.chat, `
Pengunaan:
${usedPrefix + command} <buka/tutup>

Contoh:
${usedPrefix + command} tutup
${usedPrefix + command} buka
<<<<<<< HEAD
	`.trim(), '© Maceng', 'Buka', ',grup 1', 'Tutup', ',grup 0')
		throw false
=======
	`.trim(), '© stikerin', 'Buka', ',grup 1', 'Tutup', ',grup 0', m)
		throw 0
>>>>>>> ecf6fc563b6b07bd684a6ce349e0f54706aca3cc
	}
	await conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, isClose)
}
handler.help = ['grup <buka/tutup>']
handler.tags = ['group']
handler.command = /^(gro?up)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler
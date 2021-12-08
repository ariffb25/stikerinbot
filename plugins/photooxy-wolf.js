let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} BangBot*`, m)
	let text = args.join` `
	fetch('https://tessyyy-api.herokuapp.com/api/textmaker/metallic?text=' + encodeURIComponent(text) + '&theme=wolf' )
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result.url, 'g.jpg', 'ututututu', m,false, { thumbnail: Buffer.alloc(0) })	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['wolf'].map(v => v + '[text]')
handler.tags = ['ph']
handler.command = /^(wolf)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
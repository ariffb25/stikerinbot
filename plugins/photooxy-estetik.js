let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 80
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	fetch('https://api.zeks.xyz/api/estetikpic?apikey=faisaljrr')
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result.result, 'estp.jpg', '', m , false, { asDocument: true })	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
}
handler.help = ['picestetik']
handler.tags = ['ph']
handler.command = /^(picestetik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
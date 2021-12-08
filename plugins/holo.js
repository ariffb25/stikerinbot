 let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 50
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	  	fetch('https://nekos.life/api/v2/img/holo')
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
	conn.sendFile(m.chat, json.url, 'blowjoc.jpg', '',m)	
	}) .catch(() => { conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m) })
  			
	}
handler.help = ['holo']
handler.tags = ['anime']
handler.command = /^holo?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


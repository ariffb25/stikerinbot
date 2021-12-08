//https://wa.me/${who.split`@`[0]}
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p }) => {
await m.reply(global.wait)
let PhoneNumber = require('awesome-phonenumber')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let anu = `https://wa.me/${who.split`@`[0]}`

conn.fakeReply(m.chat, anu, '0@s.whatsapp.net', '*Nie bang*', 'status@broadcast')
}

handler.help = ['wa.me']
handler.tags = ['tools']
handler.group = false
handler.command = /^wa.me$/i

module.exports = handler
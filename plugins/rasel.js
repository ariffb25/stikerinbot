let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let users = participants.map((u) => u.jid);
let zero = fs.readFileSync('./src/mwah.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true, contextInfo: { mentionedJid: users }})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(rasel|sel|@lucu ?bot)$/i
handler.command = new RegExp

module.exports = handler

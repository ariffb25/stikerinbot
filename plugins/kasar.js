let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let kasar = fs.readFileSync('./audio/kasar.mp3') 
conn.sendMessage(m.chat, kasar, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
conn.fakeReply(m.chat, kasar, '0@s.whatsapp.net', '*ðŸŽ¶ IHH JANGAN KASAR OM ðŸŽ¶*', 'status@broadcast')
}

handler.customPrefix = /^(kontol,memek,anjing,ajg,goblok)?$/i
handler.command = new RegExp

module.exports = handler

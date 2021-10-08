let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let users = participants.map((u) => u.jid);
let zero = fs.readFileSync('./src/anjing.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*WOAHHHHH *', 'status@broadcast')
}
handler.customPrefix = /^(babi|anjing|celeng|ngentod|kontol|memek|asu)$/i
handler.command = new RegExp

module.exports = handler

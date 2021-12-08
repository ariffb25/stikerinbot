let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `SC VIA Github
Ini Chanel Youtube Onwer :
https://youtube.com/channel/UCVv3wC5Q7_juw-d9HepjpOQ
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*YANG SUBSCRIBE DPT PAHALA*', 'status@broadcast') 
}
handler.help = ['ytowner']
handler.tags = ['info']
handler.command = /^(ytowner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

module.exports = handler
let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk membuat logo', m)
  let url = 'https://api.xteam.xyz/textpro/realisticcloud?text=${text}&APIKEY=HIRO' 
  
conn.sendFile(m.chat, url, m)

}
handler.help = ['realisticcloud']
handler.tags = ['sticker']
handler.command = /^(realisticcloud)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


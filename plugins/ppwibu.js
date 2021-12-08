let fetch = require('node-fetch')
let waifu = require('nekos.life')
let neko = new waifu()
     let handler  = async (m, { conn, args }) => {
     kk = await neko.sfw.avatar()
   conn.sendFile(m.chat, kk.url, 'avatar.jpg', 'avatarnya kak', m, false)
}
handler.help = ['ppwibu']
handler.tags = ['wibu']
handler.command = /^ppwibu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
let fetch = require('node-fetch')
let limit = 50
let handler = async (m, { conn, command, args }) => {  
try {  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'harap masukan teksmu!!!',m)
  let p = await (await fetch('http://zekais-api.herokuapp.com/bukukanan?text='+encodeURIComponent(text) )).buffer()
  m.reply('_Tunggu Sebentar. . ._')
  conn.sendFile(m.chat, p, 'image.png' , 'Berhasil Bro!!!', m, false, {
  thumbnail: Buffer.alloc(0)
      })} catch (e) {
  m.reply (`apikey invalid atau server down`)} 
}
handler.help = ['nuliskiri']
handler.tags = ['nulis']
handler.command = /^nuliskiri?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
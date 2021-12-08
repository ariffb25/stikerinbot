let fetch = require('node-fetch')
let limit = 80
let handler = async (m, { conn, command, args }) => { 
 try {
  let text = args.join` `
  if (!text) return conn.reply (m.chat, 'harap masukan parameter teks',m)
  m.reply('_Tunggu Sebentar. . ._')
  let p = await (await fetch('https://fzn-gaz.herokuapp.com/api/summer3d?apikey=gege'+ '&text=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'Berhasil Bro!!!', m)} catch (e) {
  m.reply (`apikey invalid atau server down`)}
}
handler.help = ['hutan'].map(v => v + '[text]')
handler.tags = ['ph']
handler.command = /^hutan$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
let fetch = require('node-fetch')
let limit = 78
let handler = async (m, { conn, command, args }) => {  
  m.reply('_Tunggu Sebentar. . ._')
  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'masukan teksnya bang',m)
  let p = await (await fetch('https://tolol.ibnux.com/img.php?nama=' + encodeURIComponent(text))).buffer()
  conn.sendFile(m.chat, p, 'image.png' , 'matur nuwon template e mas ibnu', m,false, { thumbnail: Buffer.alloc(0) })		
}
handler.help = ['tolol [Teks]']
handler.tags = ['ph']
handler.command = /^tolol$/i
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


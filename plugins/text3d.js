let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/text3dbox?apikey=PutriCntq&text=${response}`
  conn.sendFile(m.chat, res, 'text3d.jpg', `Nih kak`, m, false)
}
handler.help = ['text3d'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(text3d)$/i
handler.register = true

module.exports = handler


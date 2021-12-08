let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/gneon?apikey=PutriCntq&text=${response}`
  conn.sendFile(m.chat, res, 'gneon.jpg', `Nih kak`, m, false)
}
handler.help = ['gneon'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(gneon)$/i
handler.register = true

module.exports = handler


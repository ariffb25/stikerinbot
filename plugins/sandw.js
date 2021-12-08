let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/sandw?apikey=PutriCntq&text=${response}`
  conn.sendFile(m.chat, res, 'sandw.jpg', `Nih kak`, m, false)
}
handler.help = ['sandw'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(sandw)$/i
handler.register = true

module.exports = handler


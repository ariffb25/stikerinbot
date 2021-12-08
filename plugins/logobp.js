let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/logobp?text=${response}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'logobp.jpg', `Nih kak`, m, false)
}
handler.help = ['logobp'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(logobp)$/i
handler.register = true

module.exports = handler


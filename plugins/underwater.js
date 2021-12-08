let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://videfikri.com/api/textmaker/underwater/?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nihh,, Masih segar dari Pelautan`, m, false)
}
handler.help = ['underwater'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(underwater)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `http://docs-jojo.herokuapp.com/api/gaming?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `GG Geming Gak Gays?`, m, false)
}
handler.help = ['gaminglogo'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(gaminglogo)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba

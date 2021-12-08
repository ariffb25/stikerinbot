let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `http://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=31caf10e4a64e86c1a92bcba&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Selamat Ulang Tahun ${response}`, m, false)
}
handler.help = ['ultah'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ultah)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba

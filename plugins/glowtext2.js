let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://naufalhoster.xyz/textmaker/glow?apikey=Cv5SHS-9ZxAto-HnWqLR&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih My Baby`, m, false)
}
handler.help = ['glowtext2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(glowtext2)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba

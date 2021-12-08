let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://videfikri.com/api/textmaker/gsuggest/?text1=${response[0]}&text2=${response[1]}&text3=${response[2]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Google be like :`, m, false)
}
handler.help = ['gsuggesti'].map(v => v + ' <teks|teks|teks>')
handler.tags = ['sticker']

handler.command = /^(gsuggesti)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
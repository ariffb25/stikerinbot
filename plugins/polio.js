let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks Nya.\nContoh !polio kiri|Perkawinan Silang Ayam Dengan Manusaia Menyebabkan Keguguran Pada Induk Ayam.'
  m.reply('Sedang Menulis...')
  let res = await fetch(`http://zekais-api.herokuapp.com/folio${response[0]}?text=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Cuk`, m, false)
}
handler.help = ['polio'].map(v => v + ' <kanan/kiri|teks>')
handler.tags = ['nulis']

handler.command = /^(polio)$/i
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
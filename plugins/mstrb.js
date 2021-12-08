let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/mstrb?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'mstrb.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['mstrb'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(mstrb)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


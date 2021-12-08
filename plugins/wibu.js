let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/asupan/wibu?apikey=MIMINETBOT`
  conn.sendFile(m.chat, res, 'wibu.mp4', `wangy wangy wangy`, m, false)
}
handler.help = ['wibu'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(wibu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler


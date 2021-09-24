let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar Kak...')
  let res = `https://ariarestapii.herokuapp.com/api/waifu?apikey=aria`
  conn.sendFile(m.chat, res, 'waifu.png', `Ini Kak`, m, false)
}
handler.help = ['waifu'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(waifu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true

module.exports = handler

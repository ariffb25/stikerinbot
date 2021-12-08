let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/party?q=BaileysCoders&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'party.jpg', `Nih kak`, m, false)
}
handler.help = ['party'].map(v => v + ' <teks>')
handler.tags = ['maker']
handler.command = /^(party)$/i
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



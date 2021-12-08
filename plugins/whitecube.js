let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   text = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/textmaker/white-cube?q=${text}&apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'white-cube.jpg', `Nih kak`, m, false)
}
handler.help = ['whitecube'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(whitecube)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler



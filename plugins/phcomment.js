let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://api.zeks.xyz/api/phub?apikey=MIMINGANZ&img=https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg&username=${response[0]}&msg=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['phcomment'].map(v => v + ' <username|command>')
handler.tags = ['sticker']

handler.command = /^(phcomment)$/i
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
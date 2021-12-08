let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'pubgserti2', `Nih kak`, m, false)
}
handler.help = ['pubgserti2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(pubgserti2)$/i

module.exports = handler


let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/textmaker/game?text=${response[0]}&text2=${response[1]}&theme=pubg&apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'pubglogo.jpg', `Nih kak`, m, false)
}
handler.help = ['pubglogo'].map(v => v + ' teks|teks')
handler.tags = ['maker']

handler.command = /^(pubglogo)$/i
handler.register = true

module.exports = handler
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://leyscoders-api.herokuapp.com/api/estetik?apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result, 'estetik.jpg', `Nih Kak`, m, false)
}
handler.help = ['estetik'].map(v => v + ' ')
handler.tags = ['image']
handler.command = /^(estetik)$/i

module.exports = handler


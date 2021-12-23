let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  let res = await fetch(API('https://coffee.alexflipnote.dev/', '/random.json'))
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  conn.sendFile(m.chat, json.file, 'kopi.png', 'kopi', m)
}
handler.help = ['coffee', 'kopi']
handler.tags = ['internet']
handler.command = /^(kopi|coffee)$/i

module.exports = handler
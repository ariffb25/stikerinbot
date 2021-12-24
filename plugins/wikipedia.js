let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Javascript`
  let res = await fetch(API('amel', '/wikipedia', { q: text }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.status) throw json
  m.reply(json.isi)
}
handler.help = ['wikipedia <teks>']
handler.tags = ['internet']
handler.command = /^(wiki(pedia)?)$/i

module.exports = handler
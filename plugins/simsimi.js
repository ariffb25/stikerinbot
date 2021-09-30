let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi2', { kata: text }, 'APIKEY'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw json
}
handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler


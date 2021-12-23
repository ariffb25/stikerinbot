let fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  let res = await fetch('https://axoltlapi.herokuapp.com')
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.url) throw json
  conn.sendFile(m.chat, json.url, 'axoltl.jpg', json.facts, m)
}
handler.help = ['axoltl']
handler.tags = ['internet']
handler.command = /^(axoltl)$/i

module.exports = handler
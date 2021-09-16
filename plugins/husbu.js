let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.https://api.xteam.xyz/randomimage/husbu?APIKEY=FuzBot1')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Suami kartun', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

handler.limit = true

module.exports = handler

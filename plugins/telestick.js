let fetch = require('node-fetch')
let { Presence } = require('@adiwajshing/baileys')
let { sticker } = require('../lib/sticker')
let handler = async (m, { text }) => {
 if (!text) throw 'Tidak Ada Url'
 
  let res = await fetch(`https://api.lolhuman.xyz/api/telestick?apikey=oniichan&url=${encodeURI(text)}`)
  let json = await res.json()
  if (json.result.sticker) {
for (let i of json.result.sticker) {
await conn.sendFile(m.chat, await sticker(false, i, packname, author), ':v', '', m)
}
} else json
}
handler.help = ['telestick'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.register = true
handler.command = /^telestick$/i

module.exports = handler
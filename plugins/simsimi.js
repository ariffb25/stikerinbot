let fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Penggunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} hai`
  let res = await fetch(API('https://api.simsimi.net', '/v2/', { text, lc: id }))
  if (!res.ok) throw eror
  let json = await res.json()
  await m.reply(`*Simi:* ${json.success}`)
}
handler.help = ['simi', 'simsimi'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler 
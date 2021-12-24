let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(API('waifupics', '/sfw/waifu'))
  if (!res.ok) throw eror
  let json = await res.json()
  conn.sendButtonImg(m.chat, json.url, 'Waifu', '© stikerin', 'Waifu', usedPrefix + command, m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i

module.exports = handler
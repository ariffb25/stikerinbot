let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/wallpaper/cyberspace?apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, pickRandom(json.result), '.png', `Wallpaper nya kak.`, m, false)
}
handler.help = ['wpcyberspace']
handler.tags = ['image']

handler.command = /^(wpcyberspace)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.herokuapp.com/api/wallpaper/programming?apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, pickRandom(json.result), '.png', `Wallpaper nya kak.`, m, false)
}
handler.help = ['wpprogramming']
handler.tags = ['image']

handler.command = /^(wpprogramming)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
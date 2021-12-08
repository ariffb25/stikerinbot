let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.herokuapp.com/api/wallpaper/pegunungan?apikey=MIMINGANZ`)
  let json = await res.json()
  conn.sendFile(m.chat, pickRandom(json.result), '.png', `Wallpaper nya kak.`, m, false)
}
handler.help = ['wppegunungan']
handler.tags = ['image']

handler.command = /^(wppegunungan)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
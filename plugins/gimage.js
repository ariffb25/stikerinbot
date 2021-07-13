let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Cari apa?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', '', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['gimage <pencarian>', 'image <pencarian>']
handler.tags = ['internet']
handler.command = /^(g?image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

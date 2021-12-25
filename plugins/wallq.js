const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Pengunaan:\n${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} Gunung kembar`
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0', '/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw eror
  let json = await res.json()
  if (json.total_match = '0') throw `Tidak ditemukan!`
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendFile(m.chat, img.url_image, '', '© stikerin', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['wallpaperq <pencarian>']
handler.tags = ['internet']
handler.command = /^wall(paper)?q?$/i

handler.limit = 1

module.exports = handler 

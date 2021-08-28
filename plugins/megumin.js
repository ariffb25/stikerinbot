let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  conn.sendFile(m.chat, json.url, '', '© stikerin', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['megumin']
handler.tags = ['internet']
handler.command = /^(megumin)$/i
//ftwrr
module.exports = handler

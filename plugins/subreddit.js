let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Media tidak ditemukan!'
  if (json.nsfw && !global.db.data.settings.nfsw) throw 'Mode NFSW tidak aktif'
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['subreddit <pencarian>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler

let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw eror
  let json = await res.json()
  if (!json.url) throw 'Media tidak ditemukan!'
  if (json.nsfw && !db.data.settings.nsfw) throw 'Mode NSFW tidak aktif'

  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['subreddit <pencarian>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler

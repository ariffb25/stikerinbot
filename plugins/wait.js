const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Send/reply images with commands ${usedPrefix}wait`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await (uploadImage)(img)
  let anime = `data:${mime};base64,${img.toString('base64')}`
  let res = await fetch(`https://api.trace.moe/search?cutBorders&url=${encodeURIComponent(url)}`)
  if (!res.ok) throw eror
  let json = await res.json()
  // m.reply(`${require('util').format(result)}`)
  let { anilist, filename, episode, from, to, similarity, video, image } = json.result[0]
  conn.sendVideo(m.chat, video, `
  ${similarity < 0.89 ? 'I Have Low Confidence About This' : ''}

Anilist : *${anilist}*
File Name : *${filename}*
Similarity : *${(similarity * 100).toFixed(1)}%*
Episode : *${episode.toString()}*
  `.trim(), m)
}
handler.help = ['wait']
handler.tags = ['tools']
handler.command = /^(wait)$/i

module.exports = handler

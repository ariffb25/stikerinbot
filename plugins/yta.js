let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `contoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}${isLimit ? `\n*Ukuran file diatas ${limit} MB, download aja sendiri:* ${dl_link}
` : ''}`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4'
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler


let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Pengunaan:\n${usedPrefix + command} <url>\n\nContoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  try {
    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : wait)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
    catch (e) { }
    if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Judul:* ${title}
*Ukuran File:* ${filesizeF}
  `.trim(), m, 0, {
      ..._thumb,
      asDocument: chat.useDocument
    })
  } catch (e) {
    return conn.sendButton(m.chat, 'Server Error', '', 'Coba Lagi', `${usedPrefix + command} ${args[0]}`)
  }
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.limit = 1

module.exports = handler 
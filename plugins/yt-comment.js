let handler = async (m, { conn, text }) => {
  if (!text) throw 'No Text'
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'file.png', '', m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['ytcomment <komen>']
handler.tags = ['maker']

handler.command = /^(ytcomment)$/i

module.exports = handler

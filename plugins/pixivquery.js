let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/pixiv?apikey=39f938655e624cb72a79560b&query=loli%20kawaii', '', '', m)
}
handler.help = ['pixiv (pencarian)']
handler.tags = ['internet']
handler.command = /^(pixiv)$/i

handler.limit = true
handler.group = true

module.exports = handler

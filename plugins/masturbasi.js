let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/mstrb?APIKEY=4a8b9aba75823076', '', '', m)
}
handler.help = ['horny']
handler.tags = ['NSFW']
handler.command = /^(horny)$/i

handler.limit = true
handler.group = true

module.exports = handler

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/pussy?APIKEY=4a8b9aba75823076', '', '', m)
}
handler.help = ['pussy']
handler.tags = ['NSFW']
handler.command = /^(pussy)$/i

handler.limit = true
handler.group = true

module.exports = handler

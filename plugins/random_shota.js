let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/shota?APIKEY=4a8b9aba75823076', '', '© Shiraori', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i

handler.limit = true

module.exports = handler

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/uniform?apikey=FuzBot1', '', 'wangyy wangyy', m)
}
handler.help = ['uniform']
handler.tags = ['anime']
handler.command = /^(uniform)$/i

handler.limit = true

module.exports = handler

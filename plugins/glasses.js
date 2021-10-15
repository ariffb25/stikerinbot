let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/glasses?APIKEY=FuzBot1', '', 'sange?', m)
}
handler.help = ['glass']
handler.tags = ['nsfw']
handler.command = /^(glass)$/i

handler.limit = true
handler.group = true
handler.premium = true
module.exports = handler

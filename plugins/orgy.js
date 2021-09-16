let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/orgy?APIKEY=FuzBot1', '', 'Sange?', m)
}
handler.help = ['orgy']
handler.tags = ['nsfw']
handler.command = /^(orgy)$/i

handler.limit = true
handler.group = true

module.exports = handler

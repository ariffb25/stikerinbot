let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=tits&apikey=hardianto', '', '© Shiraori', m)
}
handler.help = ['tits']
handler.tags = ['NSFW']
handler.command = /^(tits)$/i

handler.limit = true
handler.group = true

module.exports = handler

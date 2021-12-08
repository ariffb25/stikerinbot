let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=trap&apikey=hardianto', '', 'kamu sange?', m)
}
handler.help = ['trap']
handler.tags = ['nsfw']
handler.command = /^(trap)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=neko&apikey=hardianto', '', 'ahhhh', m)
  
}
handler.help = ['nekoo']
handler.tags = ['nsfw']
handler.command = /^(nekoo)$/i

handler.limit = true
handler.group = true

module.exports = handler

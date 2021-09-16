let handler = async (m, { conn }) => {
  
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/hentai?APIKEY=FuzBot1', '', 'hentai', m)
}
handler.help = ['hentai']
handler.tags = ['nsfw']
handler.command = /^(hentai)$/i

handler.limit = true
handler.group = true

module.exports = handler

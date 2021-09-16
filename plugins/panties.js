let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/panties?APIKEY=HIRO', '', 'sange~an', m)
  
}
handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^(panties)$/i

handler.limit = true
handler.group = true

module.exports = handler

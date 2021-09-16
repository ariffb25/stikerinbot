let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://bx-hunter.herokuapp.com/api/nsfw/yuri?apikey=Ikyy69', '', 'sange~an', m)
}
handler.help = ['random yuri]
handler.tags = ['nsfw']
handler.command = /^(yuri)$/i

handler.limit = true
handler.group = true


module.exports = handler














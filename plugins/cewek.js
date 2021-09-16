let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cewe?APIKEY=4a8b9aba75823076', '', '© shiraori', m)
}
handler.help = ['cewek']
handler.tags = ['premium']
handler.command = /^(cewek)$/i

handler.premium = true


module.exports = handler

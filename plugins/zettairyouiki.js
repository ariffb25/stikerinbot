let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=FuzBot1', '', '© Shiraori', m)
}
handler.help = ['zettai']
handler.tags = ['premium']
handler.command = /^(zettai)$/i

handler.premium = true

module.exports = handler

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/jahy?APIKEY=FuzBot1', '', 'Jahy~chan', m)
}
handler.help = ['jahy']
handler.tags = ['anime']
handler.command = /^(jahy)$/i

handler.limit = true

module.exports = handler

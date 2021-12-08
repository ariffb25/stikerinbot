let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=ed78c137a46873c5b8e5fe3b', '', '', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler
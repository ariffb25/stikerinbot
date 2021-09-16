let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=39f938655e624cb72a79560b', '', '', m)
}
handler.help = ['elf']
handler.tags = ['premium']
handler.command = /^(elf)$/i

handler.premium = true

module.exports = handler


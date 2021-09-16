let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=39f938655e624cb72a79560b', '', 'caption', m)
}
handler.help = ['elf]
handler.tags = ['internet']
handler.command = /^(elf)$/i

handler.limit = true

module.exports = handler
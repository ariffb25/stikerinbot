let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=39f938655e624cb72a79560b', '', 'sange~an', m)
}
handler.help = ['nhloli']
handler.tags = ['NSFW']
handler.command = /^(nhloli)$/i

handler.limit = true
handler.group = true

module.exports = handler

let { createHash } = require('crypto')

let handler = async(m, { conn, text }) => {

if (!text) throw 'Teksnya mana?'

let hash = createHash('md5').update(text).digest('hex')

  m.reply(`Teks Asli :\n${text}\nHash :\n${hash}`)
}
handler.help = ['hash <teks>']
handler.tags = ['tools']
handler.command = /^(hash)$/i

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/uniform?apikey=beliapikey`
  conn.sendFile(m.chat, res, 'uniform.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['uniform'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(uniform)$/i

module.exports = handler
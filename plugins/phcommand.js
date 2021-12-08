let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8khcobg-yw/xiu4pi1ywvi/aaaaaaaadba/gk8tslyc1lq808a348ikzdcjf6fubkonwclcbgasyhq/s1600/cara%2bbuat%2bfoto%2bprofil%2bdi%2bwhatsapp%2bmenjadi%2bunik.jpg&username=${response[0]}&msg=${response[1]}`
  conn.sendFile(m.chat, res, 'phcommand.jpg', `Nih kak`, m, false)
}
handler.help = ['phcommand'].map(v => v + ' <name|pesan>')
handler.tags = ['sticker']
handler.command = /^(phcommand)$/i

module.exports = handler


let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/marvellogo?text1=${response[0]}&text2=${response[1]}&apikey=apivinz`
  conn.sendFile(m.chat, res, 'marvellogo.jpg', `Nih kak`, m, false)
}
handler.help = ['marvellogo'].map(v => v + ' <text|text>')
handler.tags = ['image']
handler.command = /^(marvellogo)$/i

module.exports = handler


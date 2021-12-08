let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*[ ❗ ] Wait,Proses...*')
  let res = `https://api.zeks.xyz/api/phlogo?text1=${response[0]}&text2=${response[1]}&apikey=PutriCntq`
  conn.sendFile(m.chat, res, 'phlogo.jpg', `Nih kak`, m, false)
}
handler.help = ['phlogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(phlogo)$/i
handler.register = true

module.exports = handler


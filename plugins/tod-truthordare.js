let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.send3Button(m.chat, `*Truth or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`, 'Kebenaran atau tantangan?', 'Truth', 'ytruth', 'Tod', 'yrandomtod', 'Dare', 'ydare')
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truthordare)$/i
//ftwr
module.exports = handler
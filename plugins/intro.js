let { getBuffer, succes } = require('../lib/functions.js')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
try {
   response = args.join(' ')
   let cap = `Nih Intro Mu Dah Jadi`
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
     let intro = 'https://kuhong-api.herokuapp.com/api/intromaker?text=${response}&apikey=T_8DP69T'
    conn.sendFile(m.chat, intro, 'intro.mp4', cap, m)
   
} catch (e) {
   m.reply(`Ada yang Erorr!\n\nNama *${text}* sepertinya tidak tersedia,, Pastikan Namamu tidak menggunakan simbol aneh/angka`)
  }
}
handler.help = ['intro <teks>']
handler.tags = ['maker']
handler.command = /^(intro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

const Canvacord = require('canvacord')
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Contoh penggunaan, Reply atau send image dengan caption #affect'
  try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
let image = await q.download()

Canvacord.Canvas.affect(image)
  .then(async buffer => {
 conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: '*Hadeh Kelakuan*'})
  }) 
 } catch (e) {
   m.reply('Error || Pastikan menggunakan image!!\njika masih error yah dari sononya:v')
//m.reply(`${e}`)
  }
}
handler.help = ['affect']
handler.tags = ['sticker']
handler.command = /^affect$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

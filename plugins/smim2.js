//Punya Akbar(BarXnl) ok
const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Reply image dengan caption *#smim2 teks*'
 try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${text}/_.png?background=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Error || Mungkin kesalahan pada sistem!!')
  }
}
handler.help = ['smim2']
handler.tags = ['sticker']
handler.command = /^smim2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
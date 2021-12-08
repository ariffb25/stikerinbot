const uploadImage = require('../lib/uploadImage') 
let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  heum = await fetch(`https://lolhuman.herokuapp.com/api/editor/skullmask?apikey=oniichan&img=${url}`)
    json = await heum.buffer()
   conn.sendMessage(m.chat, heum, MessageType.image, {
    quoted: m
  })
 } catch (e) {
   m.reply('Reply image, Kalau gabisa error paok!!')
  }
}
handler.help = ['skullmask']
handler.tags = ['tools']
handler.command = /^skullmask$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
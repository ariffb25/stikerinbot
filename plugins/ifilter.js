const uploadImage = require('../lib/uploadImage') 
let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  m.reply('*Sedang di proses, Mohon tunggu sebentar kak:p*')
 try {
 if (!text) throw 'masukin filternya!!'
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  heum = await fetch(global.API('lol', `/api/filter/${text}`, { img: url }, 'apikey'))
  json = await heum.buffer()
   conn.sendMessage(m.chat, heum, MessageType.image, {
    quoted: m, caption: `*Filter: ${text}*`
  })
 } catch (e) {
   m.reply(`Cara penggunaan!!\n reply image atau send image dengan caption *#ifilter lofi*

[ *List Filter* ]

lofi
1977
aden
moon
kelvin
lark
maven
mayfair
earlybird
brannan
brooklyn
clarendon
gingham
hudson
inkwell
nashville
perpetua
reyes
rise
slumber
stinson
toaster
valencia
walden
willow
xpro2

_note:_
masukan parameter dengan benar!
Jika error berarti lagi error:v`)
  }
}
handler.help = ['ifilter']
handler.tags = ['tools']
handler.command = /^ifilter$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = true
handler.fail = null

module.exports = handler
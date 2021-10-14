const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, text }) => {
  let stiker = false
  try {
    let [packname, ...author] = text.split`|`
    author = (author || []).join`|`
    let q = m.quoted ? m.quoted : m
    let mime = m.quoted.mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) throw `reply sticker with command ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, out, packname || '', author || '')
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) throw `reply image with command ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link, packname || '', author || '')
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) throw '10 seconds max!'
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) throw `reply video with command ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link, packname || '', author || '')
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Reply to the sticker!'
  }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i

handler.limit = true

module.exports = handler
